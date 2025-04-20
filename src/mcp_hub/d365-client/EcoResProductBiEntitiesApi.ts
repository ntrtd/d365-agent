/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EcoResProductBiEntities } from './EcoResProductBiEntities';
import { EcoResProductBiEntitiesRequestBuilder } from './EcoResProductBiEntitiesRequestBuilder';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
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
export class EcoResProductBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EcoResProductBiEntities<DeSerializersT>, DeSerializersT>
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
  ): EcoResProductBiEntitiesApi<DeSerializersT> {
    return new EcoResProductBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EcoResProductBiEntities;

  requestBuilder(): EcoResProductBiEntitiesRequestBuilder<DeSerializersT> {
    return new EcoResProductBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EcoResProductBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EcoResProductBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EcoResProductBiEntities<DeSerializersT>,
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
    typeof EcoResProductBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EcoResProductBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_TYPE: EnumField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      EcoResProductServiceType,
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    RETAIL_SIZE_GROUP_ID: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAI_TOTAL_WEIGHT: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: EnumField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_COLOR_GROUP_ID: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_MASTER: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDS_CW_PRODUCT: EnumField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_STYLE_GROUP_ID: OrderableEdmTypeField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_CONFIGURATION_TECHNOLOGY: EnumField<
      EcoResProductBiEntities<DeSerializers>,
      DeSerializersT,
      EcoResVariantConfigurationTechnologyType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EcoResProductBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TYPE: fieldBuilder.buildEnumField(
          'ServiceType',
          EcoResProductServiceType,
          true
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link retailSizeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_SIZE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RetailSizeGroupId',
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
         * Static representation of the {@link retaiTotalWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAI_TOTAL_WEIGHT: fieldBuilder.buildEdmTypeField(
          'RetaiTotalWeight',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
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
         * Static representation of the {@link isProductVariantUnitConversionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: fieldBuilder.buildEnumField(
          'IsProductVariantUnitConversionEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RetailColorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER: fieldBuilder.buildEdmTypeField(
          'ProductMaster',
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
         * Static representation of the {@link pdsCwProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_PRODUCT: fieldBuilder.buildEnumField(
          'PdsCWProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RetailStyleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantConfigurationTechnology} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_CONFIGURATION_TECHNOLOGY: fieldBuilder.buildEnumField(
          'VariantConfigurationTechnology',
          EcoResVariantConfigurationTechnologyType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EcoResProductBiEntities)
      };
    }

    return this._schema;
  }
}
