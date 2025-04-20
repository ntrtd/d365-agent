/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountFiscalTexts } from './DiscountFiscalTexts';
import { DiscountFiscalTextsRequestBuilder } from './DiscountFiscalTextsRequestBuilder';
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
export class DiscountFiscalTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscountFiscalTexts<DeSerializersT>, DeSerializersT>
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
  ): DiscountFiscalTextsApi<DeSerializersT> {
    return new DiscountFiscalTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiscountFiscalTexts;

  requestBuilder(): DiscountFiscalTextsRequestBuilder<DeSerializersT> {
    return new DiscountFiscalTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscountFiscalTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DiscountFiscalTexts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscountFiscalTexts<DeSerializersT>,
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
    typeof DiscountFiscalTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscountFiscalTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiscountFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCOUNT: OrderableEdmTypeField<
      DiscountFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONNECTOR_GROUP_NUMBER: OrderableEdmTypeField<
      DiscountFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ON_FISCAL_RECEIPT: OrderableEdmTypeField<
      DiscountFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DiscountFiscalTexts<DeSerializers>>;
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
         * Static representation of the {@link discount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT: fieldBuilder.buildEdmTypeField(
          'Discount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link connectorGroupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConnectorGroupNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textOnFiscalReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ON_FISCAL_RECEIPT: fieldBuilder.buildEdmTypeField(
          'TextOnFiscalReceipt',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscountFiscalTexts)
      };
    }

    return this._schema;
  }
}
