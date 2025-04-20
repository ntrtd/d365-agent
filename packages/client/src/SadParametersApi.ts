/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadParameters } from './SadParameters';
import { SadParametersRequestBuilder } from './SadParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { PlSadPostingRule } from './PlSadPostingRule';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SadParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SadParameters<DeSerializersT>, DeSerializersT>
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
  ): SadParametersApi<DeSerializersT> {
    return new SadParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SadParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SadParameters;

  requestBuilder(): SadParametersRequestBuilder<DeSerializersT> {
    return new SadParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SadParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SadParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SadParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SadParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SadParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MISCELLANEOUS_CHARGES_FROM_THE_SAD_DOCUMENT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MISC_PAYMENTS: EnumField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      PlSadPostingRule,
      true,
      true
    >;
    INSURANCE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_ON_SAD_DOCUMENT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_ROUNDING: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDITIONAL_COSTS_FORM_INVOICE: EnumField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      PlSadPostingRule,
      true,
      true
    >;
    MISC_PAYMENTS_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUTY_ROUNDING: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCISE_TAX_ROUNDING: OrderableEdmTypeField<
      SadParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SadParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SadParameters<DeSerializers>>;
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
         * Static representation of the {@link miscellaneousChargesFromTheSadDocumentAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISCELLANEOUS_CHARGES_FROM_THE_SAD_DOCUMENT_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MiscellaneousChargesFromTheSADDocumentAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link miscPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_PAYMENTS: fieldBuilder.buildEnumField(
          'MiscPayments',
          PlSadPostingRule,
          true
        ),
        /**
         * Static representation of the {@link insuranceAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'InsuranceAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportOnSadDocumentAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_ON_SAD_DOCUMENT_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'TransportOnSADDocumentAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link transportAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'TransportAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_ROUNDING: fieldBuilder.buildEdmTypeField(
          'VATRounding',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link additionalCostsFormInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_COSTS_FORM_INVOICE: fieldBuilder.buildEnumField(
          'AdditionalCostsFormInvoice',
          PlSadPostingRule,
          true
        ),
        /**
         * Static representation of the {@link miscPaymentsAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_PAYMENTS_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MiscPaymentsAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dutyRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY_ROUNDING: fieldBuilder.buildEdmTypeField(
          'DutyRounding',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exciseTaxRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TAX_ROUNDING: fieldBuilder.buildEdmTypeField(
          'ExciseTaxRounding',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadParameters)
      };
    }

    return this._schema;
  }
}
