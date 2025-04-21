/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransferLineFiscalInfo } from './TransferLineFiscalInfo';
import { TransferLineFiscalInfoRequestBuilder } from './TransferLineFiscalInfoRequestBuilder';
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
export class TransferLineFiscalInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransferLineFiscalInfo<DeSerializersT>, DeSerializersT>
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
  ): TransferLineFiscalInfoApi<DeSerializersT> {
    return new TransferLineFiscalInfoApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransferLineFiscalInfo;

  requestBuilder(): TransferLineFiscalInfoRequestBuilder<DeSerializersT> {
    return new TransferLineFiscalInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransferLineFiscalInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransferLineFiscalInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransferLineFiscalInfo<DeSerializersT>,
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
    typeof TransferLineFiscalInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransferLineFiscalInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_ID: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_TAX_ITEM_GROUP: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CHANGED_MANUALLY: EnumField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIVE_TAX_GROUP: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVE_PRICE: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_TAX_GROUP: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVE_TAX_ITEM_GROUP: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CFOP_ID: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVE_CFOP_ID: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_PRICE: OrderableEdmTypeField<
      TransferLineFiscalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TransferLineFiscalInfo<DeSerializers>>;
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
         * Static representation of the {@link transferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'TransferId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ShipTaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceChangedManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CHANGED_MANUALLY: fieldBuilder.buildEnumField(
          'PriceChangedManually',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiveTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ReceiveTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_PRICE: fieldBuilder.buildEdmTypeField(
          'ReceivePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ShipTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiveTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ReceiveTaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCfopId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CFOP_ID: fieldBuilder.buildEdmTypeField(
          'ShipCFOPId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiveCfopId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_CFOP_ID: fieldBuilder.buildEdmTypeField(
          'ReceiveCFOPId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_PRICE: fieldBuilder.buildEdmTypeField(
          'ShipPrice',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransferLineFiscalInfo)
      };
    }

    return this._schema;
  }
}
