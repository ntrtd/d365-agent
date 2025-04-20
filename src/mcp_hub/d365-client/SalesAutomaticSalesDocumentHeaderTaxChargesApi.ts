/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAutomaticSalesDocumentHeaderTaxCharges } from './SalesAutomaticSalesDocumentHeaderTaxCharges';
import { SalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder } from './SalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder';
import { DeliveryChargeGroupApi } from './DeliveryChargeGroupApi';
import { CustomerChargeGroupApi } from './CustomerChargeGroupApi';
import { TaxCodesApi } from './TaxCodesApi';
import { SalesChargeApi } from './SalesChargeApi';
import { DeliveryModesV2Api } from './DeliveryModesV2Api';
import { CustomersV3Api } from './CustomersV3Api';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesAutomaticSalesDocumentHeaderTaxChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT
    >
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
  ): SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderTaxChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeDeliveryGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_DELIVERY_GROUP: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      DeliveryChargeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER_GROUP: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      CustomerChargeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesCharge} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      SalesChargeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeDeliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_DELIVERY_MODE: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DeliveryChargeGroupApi<DeSerializersT>,
      CustomerChargeGroupApi<DeSerializersT>,
      TaxCodesApi<DeSerializersT>,
      SalesChargeApi<DeSerializersT>,
      DeliveryModesV2Api<DeSerializersT>,
      CustomersV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_CHARGE_DELIVERY_GROUP: new OneToOneLink(
        'SalesChargeDeliveryGroup',
        this,
        linkedApis[0]
      ),
      SALES_CHARGE_CUSTOMER_GROUP: new OneToOneLink(
        'SalesChargeCustomerGroup',
        this,
        linkedApis[1]
      ),
      SALES_TAX_CODE: new OneToOneLink('SalesTaxCode', this, linkedApis[2]),
      SALES_CHARGE: new OneToOneLink('SalesCharge', this, linkedApis[3]),
      SALES_CHARGE_DELIVERY_MODE: new OneToOneLink(
        'SalesChargeDeliveryMode',
        this,
        linkedApis[4]
      ),
      SALES_CHARGE_CUSTOMER: new OneToOneLink(
        'SalesChargeCustomer',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = SalesAutomaticSalesDocumentHeaderTaxCharges;

  requestBuilder(): SalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
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
    typeof SalesAutomaticSalesDocumentHeaderTaxCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAutomaticSalesDocumentHeaderTaxCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_DELIVERY_GROUP_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_CHARGE_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeDeliveryGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_DELIVERY_GROUP: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      DeliveryChargeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER_GROUP: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      CustomerChargeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesCharge} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      SalesChargeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeDeliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_DELIVERY_MODE: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER: OneToOneLink<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SalesAutomaticSalesDocumentHeaderTaxCharges<DeSerializers>
    >;
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
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChargingCustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingChargeCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CHARGE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargingChargeCustomerGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingDeliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'ChargingDeliveryModeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingChargeDeliveryGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CHARGE_DELIVERY_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargingChargeDeliveryGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'SalesChargeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SalesAutomaticSalesDocumentHeaderTaxCharges
        )
      };
    }

    return this._schema;
  }
}
