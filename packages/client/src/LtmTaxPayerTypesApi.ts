/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmTaxPayerTypes } from './LtmTaxPayerTypes';
import { LtmTaxPayerTypesRequestBuilder } from './LtmTaxPayerTypesRequestBuilder';
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
export class LtmTaxPayerTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmTaxPayerTypes<DeSerializersT>, DeSerializersT>
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
  ): LtmTaxPayerTypesApi<DeSerializersT> {
    return new LtmTaxPayerTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmTaxPayerTypes;

  requestBuilder(): LtmTaxPayerTypesRequestBuilder<DeSerializersT> {
    return new LtmTaxPayerTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmTaxPayerTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmTaxPayerTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LtmTaxPayerTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LtmTaxPayerTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmTaxPayerTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PAYER_TYPE_ID: OrderableEdmTypeField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANDATORY_JURISDICTION: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_PAYER_TYPE_DESCRIPTION: OrderableEdmTypeField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_TAX_PAYER: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_STATE_DOC_NUM: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_COUNTRY_DOC_NUM: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_VENDOR_CAI: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_TAX_PAYER: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_RAD_COUNTRY: EnumField<
      LtmTaxPayerTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmTaxPayerTypes<DeSerializers>>;
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
         * Static representation of the {@link taxPayerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mandatoryJurisdiction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_JURISDICTION: fieldBuilder.buildEnumField(
          'MandatoryJurisdiction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxPayerTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalTaxPayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_TAX_PAYER: fieldBuilder.buildEnumField(
          'InternalTaxPayer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryStateDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_STATE_DOC_NUM: fieldBuilder.buildEnumField(
          'MandatoryStateDocNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryCountryDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_COUNTRY_DOC_NUM: fieldBuilder.buildEnumField(
          'MandatoryCountryDocNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateVendorCai} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_VENDOR_CAI: fieldBuilder.buildEnumField(
          'ValidateVendorCAI',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link foreignTaxPayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_TAX_PAYER: fieldBuilder.buildEnumField(
          'ForeignTaxPayer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryRadCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_RAD_COUNTRY: fieldBuilder.buildEnumField(
          'MandatoryRadCountry',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmTaxPayerTypes)
      };
    }

    return this._schema;
  }
}
