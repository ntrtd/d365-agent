/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerChargeGroup } from './CustomerChargeGroup';
import { CustomerChargeGroupRequestBuilder } from './CustomerChargeGroupRequestBuilder';
import { SalesAutomaticSalesDocumentHeaderTaxChargesApi } from './SalesAutomaticSalesDocumentHeaderTaxChargesApi';
import { BankAccountsApi } from './BankAccountsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerChargeGroupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerChargeGroup<DeSerializersT>, DeSerializersT>
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
  ): CustomerChargeGroupApi<DeSerializersT> {
    return new CustomerChargeGroupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesChargeCustomerGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER_GROUPS: OneToManyLink<
      CustomerChargeGroup<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      CustomerChargeGroup<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>,
      BankAccountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_CHARGE_CUSTOMER_GROUPS: new OneToManyLink(
        'SalesChargeCustomerGroups',
        this,
        linkedApis[0]
      ),
      BANK_ACCOUNT: new OneToManyLink('BankAccount', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CustomerChargeGroup;

  requestBuilder(): CustomerChargeGroupRequestBuilder<DeSerializersT> {
    return new CustomerChargeGroupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerChargeGroup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerChargeGroup<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerChargeGroup<DeSerializersT>,
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
    typeof CustomerChargeGroup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerChargeGroup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerChargeGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      CustomerChargeGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerChargeGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesChargeCustomerGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER_GROUPS: OneToManyLink<
      CustomerChargeGroup<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      CustomerChargeGroup<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerChargeGroup<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerChargeGroup)
      };
    }

    return this._schema;
  }
}
