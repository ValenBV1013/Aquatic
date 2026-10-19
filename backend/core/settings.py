"""
Django settings for core project.
"""
import os
from pathlib import Path
import dj_database_url  # Asegúrate de tener instalado 'dj-database-url' en tu venv y requirements.txt

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get(
    'SECRET_KEY', 
    'django-insecure-=p510aysc)ha+=9fcrv=k11^2ei%r!gcn-ql-wc!e*&=mozjo@'
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', 'True') == 'True'

# Permitir el dominio local y los subdominios de Render
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '*').split(',')


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Third party
    'rest_framework',
    'corsheaders',
    # Local
    'api',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', # Para archivos estáticos en Render
    'corsheaders.middleware.CorsMiddleware',      # Debe ir lo más arriba posible, justo debajo de WhiteNoise
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/6.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Si Render asigna una URL de base de datos PostgreSQL (DATABASE_URL), la usará automáticamente:
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)


# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
LANGUAGE_CODE = 'es-es' # O opcionalmente 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Almacenamiento optimizado de archivos estáticos para WhiteNoise
STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}


# ==========================================
# 🌐 CONFIGURACIÓN DE CORS & SECURITY
# ==========================================

# Permite peticiones de cualquier dominio durante desarrollo/pruebas.
# Para limitar en producción a solo Vercel, cambia True por False y usa CORS_ALLOWED_ORIGINS.
CORS_ALLOW_ALL_ORIGINS = True 

# Ejemplo si deseas ser más estricto con Vercel:
# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:5173",
#     "http://localhost:3000",
#     "https://tu-proyecto-frontend.vercel.app",
# ]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# Email
MAILERS = {
    'default': {
        'BACKEND': 'django.core.mail.backends.console.EmailBackend',
    },
}