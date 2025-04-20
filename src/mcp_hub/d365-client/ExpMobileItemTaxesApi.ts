/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileItemTaxes } from './ExpMobileItemTaxes';
import { ExpMobileItemTaxesRequestBuilder } from './ExpMobileItemTaxesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxMasterDataSource } from './TaxMasterDataSource';
import { EuSalesListType } from './EuSalesListType';
import { ServiceTaxBasisIn } from './ServiceTaxBasisIn';
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
export class ExpMobileItemTaxesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileItemTaxes<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileItemTaxesApi<DeSerializersT> {
    return new ExpMobileItemTaxesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileItemTaxes;

  requestBuilder(): ExpMobileItemTaxesRequestBuilder<DeSerializersT> {
    return new ExpMobileItemTaxesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileItemTaxes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobileItemTaxes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileItemTaxes<DeSerializersT>,
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
    typeof ExpMobileItemTaxes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileItemTaxes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRED_VAT: EnumField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE: EnumField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      TaxMasterDataSource,
      true,
      true
    >;
    REPORTING_TYPE: EnumField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      EuSalesListType,
      true,
      true
    >;
    ACCOUNTING_BASIS: EnumField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      ServiceTaxBasisIn,
      true,
      true
    >;
    REVERSE_CHARGE_PERCENTAGE: OrderableEdmTypeField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUE_PAYABLE_SERVICE_TAX_AT_INVOICING: EnumField<
      ExpMobileItemTaxes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileItemTaxes<DeSerializers>>;
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
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deferredVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_VAT: fieldBuilder.buildEnumField('DeferredVAT', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField(
          'Source',
          TaxMasterDataSource,
          true
        ),
        /**
         * Static representation of the {@link reportingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_TYPE: fieldBuilder.buildEnumField(
          'ReportingType',
          EuSalesListType,
          true
        ),
        /**
         * Static representation of the {@link accountingBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_BASIS: fieldBuilder.buildEnumField(
          'AccountingBasis',
          ServiceTaxBasisIn,
          true
        ),
        /**
         * Static representation of the {@link reverseChargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ReverseChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link accruePayableServiceTaxAtInvoicing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_PAYABLE_SERVICE_TAX_AT_INVOICING: fieldBuilder.buildEnumField(
          'AccruePayableServiceTaxAtInvoicing',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileItemTaxes)
      };
    }

    return this._schema;
  }
}
