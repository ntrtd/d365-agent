/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbGeneralAdjustmentCodesPiscofins } from './FbGeneralAdjustmentCodesPiscofins';
import { FbGeneralAdjustmentCodesPiscofinsRequestBuilder } from './FbGeneralAdjustmentCodesPiscofinsRequestBuilder';
import { NoYes } from './NoYes';
import { TaxTypeBr } from './TaxTypeBr';
import { FbContribTransferEventBr } from './FbContribTransferEventBr';
import { FbGeneralAdjustmentTypePiscofinsBr } from './FbGeneralAdjustmentTypePiscofinsBr';
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
export class FbGeneralAdjustmentCodesPiscofinsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FbGeneralAdjustmentCodesPiscofins<DeSerializersT>, DeSerializersT>
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
  ): FbGeneralAdjustmentCodesPiscofinsApi<DeSerializersT> {
    return new FbGeneralAdjustmentCodesPiscofinsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FbGeneralAdjustmentCodesPiscofins;

  requestBuilder(): FbGeneralAdjustmentCodesPiscofinsRequestBuilder<DeSerializersT> {
    return new FbGeneralAdjustmentCodesPiscofinsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FbGeneralAdjustmentCodesPiscofins<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbGeneralAdjustmentCodesPiscofins<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbGeneralAdjustmentCodesPiscofins<DeSerializersT>,
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
    typeof FbGeneralAdjustmentCodesPiscofins,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbGeneralAdjustmentCodesPiscofins,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IDENTIFICATION: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEITA_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OTHER_DEBIT: EnumField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_TYPE: EnumField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      TaxTypeBr,
      true,
      true
    >;
    SPED_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSFER_EVENT: EnumField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      FbContribTransferEventBr,
      true,
      true
    >;
    ADJUSTMENT_TYPE: EnumField<
      FbGeneralAdjustmentCodesPiscofins<DeSerializers>,
      DeSerializersT,
      FbGeneralAdjustmentTypePiscofinsBr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FbGeneralAdjustmentCodesPiscofins<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link identification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'Identification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receitaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEITA_CODE: fieldBuilder.buildEdmTypeField(
          'ReceitaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link otherDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_DEBIT: fieldBuilder.buildEnumField('OtherDebit', NoYes, true),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', TaxTypeBr, true),
        /**
         * Static representation of the {@link spedAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'SpedAdjustmentCode',
          'Edm.String',
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
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transferEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_EVENT: fieldBuilder.buildEnumField(
          'TransferEvent',
          FbContribTransferEventBr,
          true
        ),
        /**
         * Static representation of the {@link adjustmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_TYPE: fieldBuilder.buildEnumField(
          'AdjustmentType',
          FbGeneralAdjustmentTypePiscofinsBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FbGeneralAdjustmentCodesPiscofins)
      };
    }

    return this._schema;
  }
}
