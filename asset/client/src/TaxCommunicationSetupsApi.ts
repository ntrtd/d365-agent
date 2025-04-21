/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCommunicationSetups } from './TaxCommunicationSetups';
import { TaxCommunicationSetupsRequestBuilder } from './TaxCommunicationSetupsRequestBuilder';
import { TaxYearlyComCalculationIt } from './TaxYearlyComCalculationIt';
import { NoYes } from './NoYes';
import { TaxReportFieldFormatIt } from './TaxReportFieldFormatIt';
import { TaxReportingAmountIt } from './TaxReportingAmountIt';
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
export class TaxCommunicationSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxCommunicationSetups<DeSerializersT>, DeSerializersT>
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
  ): TaxCommunicationSetupsApi<DeSerializersT> {
    return new TaxCommunicationSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxCommunicationSetups;

  requestBuilder(): TaxCommunicationSetupsRequestBuilder<DeSerializersT> {
    return new TaxCommunicationSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxCommunicationSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxCommunicationSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxCommunicationSetups<DeSerializersT>,
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
    typeof TaxCommunicationSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxCommunicationSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_ID: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_FIELD_ID: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_SIGN: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGN: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATION: EnumField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      TaxYearlyComCalculationIt,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NONDEDUCTIBLE_SALES_TAX: EnumField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMAT: EnumField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      TaxReportFieldFormatIt,
      true,
      true
    >;
    TAX: EnumField<
      TaxCommunicationSetups<DeSerializers>,
      DeSerializersT,
      TaxReportingAmountIt,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxCommunicationSetups<DeSerializers>>;
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
         * Static representation of the {@link fieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_ID: fieldBuilder.buildEdmTypeField(
          'FieldID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'TotalFieldID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SIGN: fieldBuilder.buildEdmTypeField(
          'TotalSign',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        /**
         * Static representation of the {@link sign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN: fieldBuilder.buildEdmTypeField('Sign', 'Edm.Int32', false),
        /**
         * Static representation of the {@link calculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION: fieldBuilder.buildEnumField(
          'Calculation',
          TaxYearlyComCalculationIt,
          true
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
        /**
         * Static representation of the {@link nondeductibleSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NONDEDUCTIBLE_SALES_TAX: fieldBuilder.buildEnumField(
          'NondeductibleSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEnumField(
          'Format',
          TaxReportFieldFormatIt,
          true
        ),
        /**
         * Static representation of the {@link tax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX: fieldBuilder.buildEnumField('Tax', TaxReportingAmountIt, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxCommunicationSetups)
      };
    }

    return this._schema;
  }
}
