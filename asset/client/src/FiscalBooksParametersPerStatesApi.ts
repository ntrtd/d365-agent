/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalBooksParametersPerStates } from './FiscalBooksParametersPerStates';
import { FiscalBooksParametersPerStatesRequestBuilder } from './FiscalBooksParametersPerStatesRequestBuilder';
import { NoYes } from './NoYes';
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
export class FiscalBooksParametersPerStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalBooksParametersPerStates<DeSerializersT>, DeSerializersT>
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
  ): FiscalBooksParametersPerStatesApi<DeSerializersT> {
    return new FiscalBooksParametersPerStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalBooksParametersPerStates;

  requestBuilder(): FiscalBooksParametersPerStatesRequestBuilder<DeSerializersT> {
    return new FiscalBooksParametersPerStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalBooksParametersPerStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalBooksParametersPerStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalBooksParametersPerStates<DeSerializersT>,
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
    typeof FiscalBooksParametersPerStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalBooksParametersPerStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATE: OrderableEdmTypeField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OBSERVATION_CODE: OrderableEdmTypeField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_ADJUSTMENT_CODE_FIXED_ASSET: OrderableEdmTypeField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BY_FISCAL_DOCUMENT: EnumField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_DOCUMENT_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIAP_CALCULATE_INSTALLMENT_FOR_OUTGOING: EnumField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_ADJUSTMENT_CODE_FIXED_ASSET: OrderableEdmTypeField<
      FiscalBooksParametersPerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalBooksParametersPerStates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link observationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBSERVATION_CODE: fieldBuilder.buildEdmTypeField(
          'ObservationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentAdjustmentCodeFixedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_ADJUSTMENT_CODE_FIXED_ASSET:
          fieldBuilder.buildEdmTypeField(
            'FiscalDocumentAdjustmentCodeFixedAsset',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link byFiscalDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY_FISCAL_DOCUMENT: fieldBuilder.buildEnumField(
          'ByFiscalDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentAdjustmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ciapCalculateInstallmentForOutgoing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIAP_CALCULATE_INSTALLMENT_FOR_OUTGOING: fieldBuilder.buildEnumField(
          'CIAPCalculateInstallmentForOutgoing',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'GeneralAdjustmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generalAdjustmentCodeFixedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_ADJUSTMENT_CODE_FIXED_ASSET: fieldBuilder.buildEdmTypeField(
          'GeneralAdjustmentCodeFixedAsset',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalBooksParametersPerStates)
      };
    }

    return this._schema;
  }
}
