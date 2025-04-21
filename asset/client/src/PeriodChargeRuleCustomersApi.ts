/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PeriodChargeRuleCustomers } from './PeriodChargeRuleCustomers';
import { PeriodChargeRuleCustomersRequestBuilder } from './PeriodChargeRuleCustomersRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { WarehousesApi } from './WarehousesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { PeriodChargeRuleLineCustomersApi } from './PeriodChargeRuleLineCustomersApi';
import { TableAll } from './TableAll';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PeriodChargeRuleCustomersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PeriodChargeRuleCustomers<DeSerializersT>, DeSerializersT>
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
  ): PeriodChargeRuleCustomersApi<DeSerializersT> {
    return new PeriodChargeRuleCustomersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link site} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SITE: OneToOneLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER: OneToOneLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleLineCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_LINE_CUSTOMERS: OneToManyLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SITE: new OneToOneLink('Site', this, linkedApis[0]),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[1]),
      SALES_CHARGE_CUSTOMER: new OneToOneLink(
        'SalesChargeCustomer',
        this,
        linkedApis[2]
      ),
      PERIOD_CHARGE_RULE_LINE_CUSTOMERS: new OneToManyLink(
        'PeriodChargeRuleLineCustomers',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PeriodChargeRuleCustomers;

  requestBuilder(): PeriodChargeRuleCustomersRequestBuilder<DeSerializersT> {
    return new PeriodChargeRuleCustomersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PeriodChargeRuleCustomers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PeriodChargeRuleCustomers<DeSerializersT>,
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
    typeof PeriodChargeRuleCustomers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PeriodChargeRuleCustomers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_CODE: EnumField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RULE_DESCRIPTION: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      PeriodChargeRuleCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link site} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SITE: OneToOneLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesChargeCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE_CUSTOMER: OneToOneLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleLineCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_LINE_CUSTOMERS: OneToManyLink<
      PeriodChargeRuleCustomers<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PeriodChargeRuleCustomers<DeSerializers>>;
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
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'CustomerAccountCode',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ruleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RuleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChargingCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PeriodChargeRuleCustomers)
      };
    }

    return this._schema;
  }
}
