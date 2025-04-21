/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionAttributeBiEntities } from './DimensionAttributeBiEntities';
import { DimensionAttributeBiEntitiesRequestBuilder } from './DimensionAttributeBiEntitiesRequestBuilder';
import { DimensionAttributeType } from './DimensionAttributeType';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DimensionAttributeBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DimensionAttributeBiEntities<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): DimensionAttributeBiEntitiesApi<DeSerializersT> {
    return new DimensionAttributeBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DimensionAttributeBiEntities;

  requestBuilder(): DimensionAttributeBiEntitiesRequestBuilder<DeSerializersT> {
    return new DimensionAttributeBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DimensionAttributeBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DimensionAttributeBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DimensionAttributeBiEntities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DimensionAttributeBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DimensionAttributeBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATION_VIEW_SYSTEM_LANGUAGE_ID_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSLATION_VIEW_LANGUAGE_ID_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_VIEW_SYSTEM_LANGUAGE_ID_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_VIEW_TRANSLATED_NAME_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      DimensionAttributeType,
      true,
      true
    >;
    TRANSLATION_VIEW_TRANSLATED_NAME_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACKING_ENTITY_VALUE_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_TABLE_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_VIEW_LANGUAGE_ID_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HASH_KEY: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    KEY_ATTRIBUTE: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACKING_ENTITY_TABLE_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_VIEW_KEY_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_KEY_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIVE_DERIVED_DIMENSIONS_PRECEDENCE: EnumField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSLATION_NAME_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_COLUMN_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_VIEW_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BALANCING_PSN: EnumField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSLATION_KEY_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VIEW_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_NAME_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_TRANSLATION_NAME_METHOD: EnumField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_COLUMN_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_LANGUAGE_ID_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME_ATTRIBUTE: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_VIEW_KEY_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIMENSION_KEY_COLUMN_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BACKING_ENTITY_TABLE_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACKING_ENTITY_TYPE: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACKING_ENTITY_KEY_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACKING_ENTITY_VALUE_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_VIEW_NAME_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSLATION_VIEW_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_VIEW_VALUE_FIELD_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BALANCING_DIMENSION_PSN: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSLATION_VIEW_VALUE_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATION_LANGUAGE_ID_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ATTRIBUTE: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSLATION_TABLE_ID: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COPY_VALUES_ON_CREATE: EnumField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSLATION_VIEW_NAME_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BACKING_ENTITY_KEY_FIELD_NAME: OrderableEdmTypeField<
      DimensionAttributeBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DimensionAttributeBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link translationViewSystemLanguageIdFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_SYSTEM_LANGUAGE_ID_FIELD_NAME:
          fieldBuilder.buildEdmTypeField(
            'TranslationViewSystemLanguageIdFieldName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link translationViewLanguageIdFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_LANGUAGE_ID_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationViewLanguageIdFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link translationViewSystemLanguageIdFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_SYSTEM_LANGUAGE_ID_FIELD_ID:
          fieldBuilder.buildEdmTypeField(
            'TranslationViewSystemLanguageIdFieldId',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link translationViewTranslatedNameFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_TRANSLATED_NAME_FIELD_NAME:
          fieldBuilder.buildEdmTypeField(
            'TranslationViewTranslatedNameFieldName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', DimensionAttributeType, true),
        /**
         * Static representation of the {@link translationViewTranslatedNameFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_TRANSLATED_NAME_FIELD_ID:
          fieldBuilder.buildEdmTypeField(
            'TranslationViewTranslatedNameFieldId',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link backingEntityValueFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_VALUE_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'BackingEntityValueFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link translationTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationViewLanguageIdFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_LANGUAGE_ID_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationViewLanguageIdFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hashKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HASH_KEY: fieldBuilder.buildEdmTypeField('HashKey', 'Edm.Guid', false),
        /**
         * Static representation of the {@link keyAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'KeyAttribute',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link backingEntityTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'BackingEntityTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link translationViewKeyFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_KEY_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationViewKeyFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationKeyFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_KEY_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationKeyFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giveDerivedDimensionsPrecedence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIVE_DERIVED_DIMENSIONS_PRECEDENCE: fieldBuilder.buildEnumField(
          'GiveDerivedDimensionsPrecedence',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link translationNameFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_NAME_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationNameFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValueColumnName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_COLUMN_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionValueColumnName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationViewName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationViewName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBalancingPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BALANCING_PSN: fieldBuilder.buildEnumField(
          'IsBalancing_PSN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link translationKeyFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_KEY_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationKeyFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link viewName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_NAME: fieldBuilder.buildEdmTypeField(
          'ViewName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationNameFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_NAME_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationNameFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useTranslationNameMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TRANSLATION_NAME_METHOD: fieldBuilder.buildEnumField(
          'UseTranslationNameMethod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportColumnName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_COLUMN_NAME: fieldBuilder.buildEdmTypeField(
          'ReportColumnName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationLanguageIdFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_LANGUAGE_ID_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationLanguageIdFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nameAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'NameAttribute',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link translationViewKeyFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_KEY_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationViewKeyFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dimensionKeyColumnName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_KEY_COLUMN_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionKeyColumnName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link backingEntityTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'BackingEntityTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link backingEntityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_TYPE: fieldBuilder.buildEdmTypeField(
          'BackingEntityType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link backingEntityKeyFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_KEY_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'BackingEntityKeyFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link backingEntityValueFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_VALUE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'BackingEntityValueFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationViewNameFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_NAME_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationViewNameFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link translationViewId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_ID: fieldBuilder.buildEdmTypeField(
          'TranslationViewId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link translationViewValueFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_VALUE_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TranslationViewValueFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link balancingDimensionPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCING_DIMENSION_PSN: fieldBuilder.buildEdmTypeField(
          'BalancingDimension_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link translationViewValueFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_VALUE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationViewValueFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationLanguageIdFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_LANGUAGE_ID_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationLanguageIdFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'ValueAttribute',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link translationTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'TranslationTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link copyValuesOnCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_VALUES_ON_CREATE: fieldBuilder.buildEnumField(
          'CopyValuesOnCreate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link translationViewNameFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATION_VIEW_NAME_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'TranslationViewNameFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link backingEntityKeyFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKING_ENTITY_KEY_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'BackingEntityKeyFieldName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimensionAttributeBiEntities)
      };
    }

    return this._schema;
  }
}
