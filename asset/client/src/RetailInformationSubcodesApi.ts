/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInformationSubcodes } from './RetailInformationSubcodes';
import { RetailInformationSubcodesRequestBuilder } from './RetailInformationSubcodesRequestBuilder';
import { InfocodesApi } from './InfocodesApi';
import { RetailInformationSubcodeTranslationsApi } from './RetailInformationSubcodeTranslationsApi';
import { RetailTriggerFunction } from './RetailTriggerFunction';
import { RetailPriceType } from './RetailPriceType';
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
export class RetailInformationSubcodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailInformationSubcodes<DeSerializersT>, DeSerializersT>
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
  ): RetailInformationSubcodesApi<DeSerializersT> {
    return new RetailInformationSubcodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link infocode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INFOCODE: OneToOneLink<
      RetailInformationSubcodes<DeSerializersT>,
      DeSerializersT,
      InfocodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInformationSubcodeTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFORMATION_SUBCODE_TRANSLATION: OneToManyLink<
      RetailInformationSubcodes<DeSerializersT>,
      DeSerializersT,
      RetailInformationSubcodeTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InfocodesApi<DeSerializersT>,
      RetailInformationSubcodeTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INFOCODE: new OneToOneLink('Infocode', this, linkedApis[0]),
      RETAIL_INFORMATION_SUBCODE_TRANSLATION: new OneToManyLink(
        'RetailInformationSubcodeTranslation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailInformationSubcodes;

  requestBuilder(): RetailInformationSubcodesRequestBuilder<DeSerializersT> {
    return new RetailInformationSubcodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailInformationSubcodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInformationSubcodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInformationSubcodes<DeSerializersT>,
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
    typeof RetailInformationSubcodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInformationSubcodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INFOCODE_ID: OrderableEdmTypeField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBCODE_ID: OrderableEdmTypeField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRIGGER_CODE: OrderableEdmTypeField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIGGER_FUNCTION: EnumField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      RetailTriggerFunction,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_PERCENT: OrderableEdmTypeField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_TYPE: EnumField<
      RetailInformationSubcodes<DeSerializers>,
      DeSerializersT,
      RetailPriceType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link infocode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INFOCODE: OneToOneLink<
      RetailInformationSubcodes<DeSerializersT>,
      DeSerializersT,
      InfocodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInformationSubcodeTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFORMATION_SUBCODE_TRANSLATION: OneToManyLink<
      RetailInformationSubcodes<DeSerializersT>,
      DeSerializersT,
      RetailInformationSubcodeTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailInformationSubcodes<DeSerializers>>;
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
         * Static representation of the {@link infocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'InfocodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subcodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCODE_ID: fieldBuilder.buildEdmTypeField(
          'SubcodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link triggerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIGGER_CODE: fieldBuilder.buildEdmTypeField(
          'TriggerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link triggerFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIGGER_FUNCTION: fieldBuilder.buildEnumField(
          'TriggerFunction',
          RetailTriggerFunction,
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
         * Static representation of the {@link amountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'AmountPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TYPE: fieldBuilder.buildEnumField(
          'PriceType',
          RetailPriceType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInformationSubcodes)
      };
    }

    return this._schema;
  }
}
