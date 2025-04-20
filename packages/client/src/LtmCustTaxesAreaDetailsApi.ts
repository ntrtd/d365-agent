/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmCustTaxesAreaDetails } from './LtmCustTaxesAreaDetails';
import { LtmCustTaxesAreaDetailsRequestBuilder } from './LtmCustTaxesAreaDetailsRequestBuilder';
import { NoYes } from './NoYes';
import { LtmTaxesFilter } from './LtmTaxesFilter';
import { LtmTaxOperationType } from './LtmTaxOperationType';
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
export class LtmCustTaxesAreaDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmCustTaxesAreaDetails<DeSerializersT>, DeSerializersT>
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
  ): LtmCustTaxesAreaDetailsApi<DeSerializersT> {
    return new LtmCustTaxesAreaDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmCustTaxesAreaDetails;

  requestBuilder(): LtmCustTaxesAreaDetailsRequestBuilder<DeSerializersT> {
    return new LtmCustTaxesAreaDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmCustTaxesAreaDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmCustTaxesAreaDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmCustTaxesAreaDetails<DeSerializersT>,
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
    typeof LtmCustTaxesAreaDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmCustTaxesAreaDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_VALUE: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER_SELECTION: EnumField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PUBLICATION_DATE: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAXES_FILTER: EnumField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      LtmTaxesFilter,
      true,
      true
    >;
    ENABLE_REDUCTION: EnumField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_REDUCTION: OrderableEdmTypeField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENABLE_VALUE: EnumField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPERATION_TYPE: EnumField<
      LtmCustTaxesAreaDetails<DeSerializers>,
      DeSerializersT,
      LtmTaxOperationType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmCustTaxesAreaDetails<DeSerializers>>;
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
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'CountyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField(
          'StateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
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
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucherSelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_SELECTION: fieldBuilder.buildEnumField(
          'VoucherSelection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link publicationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLICATION_DATE: fieldBuilder.buildEdmTypeField(
          'PublicationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxesFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXES_FILTER: fieldBuilder.buildEnumField(
          'TaxesFilter',
          LtmTaxesFilter,
          true
        ),
        /**
         * Static representation of the {@link enableReduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_REDUCTION: fieldBuilder.buildEnumField(
          'EnableReduction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxReduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REDUCTION: fieldBuilder.buildEdmTypeField(
          'TaxReduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enableValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_VALUE: fieldBuilder.buildEnumField('EnableValue', NoYes, true),
        /**
         * Static representation of the {@link operationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE: fieldBuilder.buildEnumField(
          'OperationType',
          LtmTaxOperationType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmCustTaxesAreaDetails)
      };
    }

    return this._schema;
  }
}
