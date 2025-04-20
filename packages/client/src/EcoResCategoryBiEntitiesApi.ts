/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EcoResCategoryBiEntities } from './EcoResCategoryBiEntities';
import { EcoResCategoryBiEntitiesRequestBuilder } from './EcoResCategoryBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { EcoResCategoryChangeStatus } from './EcoResCategoryChangeStatus';
import { PcComponentConfigurationReuseType } from './PcComponentConfigurationReuseType';
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
export class EcoResCategoryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EcoResCategoryBiEntities<DeSerializersT>, DeSerializersT>
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
  ): EcoResCategoryBiEntitiesApi<DeSerializersT> {
    return new EcoResCategoryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EcoResCategoryBiEntities;

  requestBuilder(): EcoResCategoryBiEntitiesRequestBuilder<DeSerializersT> {
    return new EcoResCategoryBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EcoResCategoryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EcoResCategoryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EcoResCategoryBiEntities<DeSerializersT>,
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
    typeof EcoResCategoryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EcoResCategoryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NESTED_SET_RIGHT: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORCE_FULL_LOOKUP_SYNC: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_ACCOUNTING_CODE_TABLE_IN: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_THRESHOLD_PSN: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NESTED_SET_LEFT: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_TANGIBLE: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_CATEGORY: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CATEGORY_ATTRIBUTES_INHERITED: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NON_GST_IN: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXEMPT_IN: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTERNAL_ID: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    HSN_CODE_TABLE_IN: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHANGE_STATUS: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      EcoResCategoryChangeStatus,
      true,
      true
    >;
    PK_WI_U_CODE: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_PROJECT_GLOBAL_CATEGORY: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REUSE_ENABLED: EnumField<
      EcoResCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      PcComponentConfigurationReuseType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EcoResCategoryBiEntities<DeSerializers>>;
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
         * Static representation of the {@link categoryHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link nestedSetRight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NESTED_SET_RIGHT: fieldBuilder.buildEdmTypeField(
          'NestedSetRight',
          'Edm.Int64',
          false
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
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
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
         * Static representation of the {@link forceFullLookupSync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORCE_FULL_LOOKUP_SYNC: fieldBuilder.buildEnumField(
          'ForceFullLookupSync',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceAccountingCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCodeTable_IN',
          'Edm.Int64',
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
         * Static representation of the {@link defaultThresholdPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_THRESHOLD_PSN: fieldBuilder.buildEdmTypeField(
          'DefaultThreshold_PSN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nestedSetLeft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NESTED_SET_LEFT: fieldBuilder.buildEdmTypeField(
          'NestedSetLeft',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isTangible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TANGIBLE: fieldBuilder.buildEnumField('IsTangible', NoYes, true),
        /**
         * Static representation of the {@link parentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ParentCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link isCategoryAttributesInherited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_ATTRIBUTES_INHERITED: fieldBuilder.buildEnumField(
          'IsCategoryAttributesInherited',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nonGstIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_GST_IN: fieldBuilder.buildEnumField('NonGST_IN', NoYes, true),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exemptIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_IN: fieldBuilder.buildEnumField('Exempt_IN', NoYes, true),
        /**
         * Static representation of the {@link externalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'ExternalId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link hsnCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'HSNCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('Level', 'Edm.Int64', false),
        /**
         * Static representation of the {@link changeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_STATUS: fieldBuilder.buildEnumField(
          'ChangeStatus',
          EcoResCategoryChangeStatus,
          true
        ),
        /**
         * Static representation of the {@link pkWiUCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PK_WI_U_CODE: fieldBuilder.buildEdmTypeField(
          'PKWiUCode',
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
         * Static representation of the {@link defaultProjectGlobalCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROJECT_GLOBAL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'DefaultProjectGlobalCategory',
          'Edm.Int64',
          false
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
         * Static representation of the {@link reuseEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REUSE_ENABLED: fieldBuilder.buildEnumField(
          'ReuseEnabled',
          PcComponentConfigurationReuseType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EcoResCategoryBiEntities)
      };
    }

    return this._schema;
  }
}
