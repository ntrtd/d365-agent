/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipConsolidationTemplatesV2 } from './ShipConsolidationTemplatesV2';
import { ShipConsolidationTemplatesV2RequestBuilder } from './ShipConsolidationTemplatesV2RequestBuilder';
import { NoYes } from './NoYes';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';
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
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ShipConsolidationTemplatesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipConsolidationTemplatesV2<DeSerializersT>, DeSerializersT>
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
  ): ShipConsolidationTemplatesV2Api<DeSerializersT> {
    return new ShipConsolidationTemplatesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipConsolidationTemplatesV2;

  requestBuilder(): ShipConsolidationTemplatesV2RequestBuilder<DeSerializersT> {
    return new ShipConsolidationTemplatesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipConsolidationTemplatesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipConsolidationTemplatesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipConsolidationTemplatesV2<DeSerializersT>,
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
    typeof ShipConsolidationTemplatesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipConsolidationTemplatesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_TEMPLATE_NAME: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGIN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_WAREHOUSE_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_CONSOLIDATION_UPDATE_SCHEDULED_SHIP_DATE_TIME: EnumField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_CONSOLIDATION_SPLIT_SHIPMENT_BY_LOAD_CAPACITY: EnumField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESTINATION_OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOURTH_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_WAREHOUSE_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILTER_QUERY: EdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    DESTINATION_FROM_ZIP_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_CONSOLIDATION_POLICY_TYPE: EnumField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyType,
      true,
      true
    >;
    ORIGIN_OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_DESCRIPTION: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_PRODUCT_FILTER_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_TO_ZIP_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_TO_ZIP_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_FROM_ZIP_CODE: OrderableEdmTypeField<
      ShipConsolidationTemplatesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShipConsolidationTemplatesV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipConsolidationTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'ShipConsolidationTemplateName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link originCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OriginCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'OriginWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willConsolidationUpdateScheduledShipDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CONSOLIDATION_UPDATE_SCHEDULED_SHIP_DATE_TIME:
          fieldBuilder.buildEnumField(
            'WillConsolidationUpdateScheduledShipDateTime',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willConsolidationSplitShipmentByLoadCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CONSOLIDATION_SPLIT_SHIPMENT_BY_LOAD_CAPACITY:
          fieldBuilder.buildEnumField(
            'WillConsolidationSplitShipmentByLoadCapacity',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link destinationOperationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationOperationalSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fourthProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOURTH_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'FourthProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'ThirdProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'SecondProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link filterQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILTER_QUERY: fieldBuilder.buildEdmTypeField(
          'FilterQuery',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link destinationFromZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_FROM_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DestinationFromZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentConsolidationPolicyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_CONSOLIDATION_POLICY_TYPE: fieldBuilder.buildEnumField(
          'ShipmentConsolidationPolicyType',
          WhsShipConsolidationPolicyType,
          true
        ),
        /**
         * Static representation of the {@link originOperationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OriginOperationalSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DestinationCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderingCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TemplateDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstProductFilterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_PRODUCT_FILTER_CODE: fieldBuilder.buildEdmTypeField(
          'FirstProductFilterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationToZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_TO_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DestinationToZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originToZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_TO_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'OriginToZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originFromZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_FROM_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'OriginFromZipCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipConsolidationTemplatesV2)
      };
    }

    return this._schema;
  }
}
