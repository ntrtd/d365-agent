/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportLedgerAccounts } from './TaxReportLedgerAccounts';
import { TaxReportLedgerAccountsRequestBuilder } from './TaxReportLedgerAccountsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class TaxReportLedgerAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxReportLedgerAccounts<DeSerializersT>, DeSerializersT>
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
  ): TaxReportLedgerAccountsApi<DeSerializersT> {
    return new TaxReportLedgerAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxReportLedgerAccounts;

  requestBuilder(): TaxReportLedgerAccountsRequestBuilder<DeSerializersT> {
    return new TaxReportLedgerAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxReportLedgerAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxReportLedgerAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxReportLedgerAccounts<DeSerializersT>,
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
    typeof TaxReportLedgerAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxReportLedgerAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY: OrderableEdmTypeField<
      TaxReportLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      TaxReportLedgerAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxReportLedgerAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link ledgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxReportLedgerAccounts)
      };
    }

    return this._schema;
  }
}
