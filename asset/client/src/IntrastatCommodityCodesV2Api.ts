/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatCommodityCodesV2 } from './IntrastatCommodityCodesV2';
import { IntrastatCommodityCodesV2RequestBuilder } from './IntrastatCommodityCodesV2RequestBuilder';
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
export class IntrastatCommodityCodesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntrastatCommodityCodesV2<DeSerializersT>, DeSerializersT>
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
  ): IntrastatCommodityCodesV2Api<DeSerializersT> {
    return new IntrastatCommodityCodesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntrastatCommodityCodesV2;

  requestBuilder(): IntrastatCommodityCodesV2RequestBuilder<DeSerializersT> {
    return new IntrastatCommodityCodesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntrastatCommodityCodesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntrastatCommodityCodesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntrastatCommodityCodesV2<DeSerializersT>,
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
    typeof IntrastatCommodityCodesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntrastatCommodityCodesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMMODITY_HIERARCHY_NAME: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTRASTAT_PARAMETERS_DATA_AREA_ID: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDITIONAL_UNITS: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_NAME: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_COMMODITY: OrderableEdmTypeField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPTIONAL_WEIGHT: EnumField<
      IntrastatCommodityCodesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntrastatCommodityCodesV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link commodityHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CommodityHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link intrastatParametersDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PARAMETERS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatParametersDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link additionalUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_UNITS: fieldBuilder.buildEdmTypeField(
          'AdditionalUnits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY: fieldBuilder.buildEdmTypeField(
          'Commodity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_NAME: fieldBuilder.buildEdmTypeField(
          'ParentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentCommodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COMMODITY: fieldBuilder.buildEdmTypeField(
          'ParentCommodity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link optionalWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIONAL_WEIGHT: fieldBuilder.buildEnumField(
          'OptionalWeight',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntrastatCommodityCodesV2)
      };
    }

    return this._schema;
  }
}
