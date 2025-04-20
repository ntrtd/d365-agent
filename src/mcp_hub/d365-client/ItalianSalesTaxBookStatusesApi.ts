/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItalianSalesTaxBookStatuses } from './ItalianSalesTaxBookStatuses';
import { ItalianSalesTaxBookStatusesRequestBuilder } from './ItalianSalesTaxBookStatusesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxBookPrintoutStatus } from './TaxBookPrintoutStatus';
import { TaxBookStatusType } from './TaxBookStatusType';
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
export class ItalianSalesTaxBookStatusesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ItalianSalesTaxBookStatuses<DeSerializersT>, DeSerializersT>
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
  ): ItalianSalesTaxBookStatusesApi<DeSerializersT> {
    return new ItalianSalesTaxBookStatusesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItalianSalesTaxBookStatuses;

  requestBuilder(): ItalianSalesTaxBookStatusesRequestBuilder<DeSerializersT> {
    return new ItalianSalesTaxBookStatusesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItalianSalesTaxBookStatuses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItalianSalesTaxBookStatuses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItalianSalesTaxBookStatuses<DeSerializersT>,
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
    typeof ItalianSalesTaxBookStatuses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItalianSalesTaxBookStatuses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SETTLEMENT_PERIOD: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TAX_BOOK: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_PAGE_NUMBER: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INCLUDE_ZERO_LINES_IT: EnumField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIRST_PAGE_NUMBER: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINTOUT_STATUS: EnumField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      TaxBookPrintoutStatus,
      true,
      true
    >;
    INCLUDE_REVERSE_TRANS_IT: EnumField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_BLANK_PAGE: EnumField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAGE: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHANGED_TO: OrderableEdmTypeField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BOOK_TYPE: EnumField<
      ItalianSalesTaxBookStatuses<DeSerializers>,
      DeSerializersT,
      TaxBookStatusType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItalianSalesTaxBookStatuses<DeSerializers>>;
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
         * Static representation of the {@link settlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlementPeriod',
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTaxBook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_BOOK: fieldBuilder.buildEdmTypeField(
          'SalesTaxBook',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastPageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LastPageNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link includeZeroLinesIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_ZERO_LINES_IT: fieldBuilder.buildEnumField(
          'IncludeZeroLines_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link firstPageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_PAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'FirstPageNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link printoutStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTOUT_STATUS: fieldBuilder.buildEnumField(
          'PrintoutStatus',
          TaxBookPrintoutStatus,
          true
        ),
        /**
         * Static representation of the {@link includeReverseTransIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_REVERSE_TRANS_IT: fieldBuilder.buildEnumField(
          'IncludeReverseTrans_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printBlankPage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BLANK_PAGE: fieldBuilder.buildEnumField(
          'PrintBlankPage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link page} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAGE: fieldBuilder.buildEdmTypeField('Page', 'Edm.Int32', false),
        /**
         * Static representation of the {@link changedTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_TO: fieldBuilder.buildEdmTypeField(
          'ChangedTo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bookType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TYPE: fieldBuilder.buildEnumField(
          'BookType',
          TaxBookStatusType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItalianSalesTaxBookStatuses)
      };
    }

    return this._schema;
  }
}
