/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InfoCodeFiscalTexts } from './InfoCodeFiscalTexts';
import { InfoCodeFiscalTextsRequestBuilder } from './InfoCodeFiscalTextsRequestBuilder';
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
export class InfoCodeFiscalTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InfoCodeFiscalTexts<DeSerializersT>, DeSerializersT>
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
  ): InfoCodeFiscalTextsApi<DeSerializersT> {
    return new InfoCodeFiscalTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InfoCodeFiscalTexts;

  requestBuilder(): InfoCodeFiscalTextsRequestBuilder<DeSerializersT> {
    return new InfoCodeFiscalTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InfoCodeFiscalTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InfoCodeFiscalTexts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InfoCodeFiscalTexts<DeSerializersT>,
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
    typeof InfoCodeFiscalTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InfoCodeFiscalTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InfoCodeFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INFO_CODE_NUMBER: OrderableEdmTypeField<
      InfoCodeFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBCODE_NUMBER: OrderableEdmTypeField<
      InfoCodeFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONNECTOR_GROUP_NUMBER: OrderableEdmTypeField<
      InfoCodeFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRINT_USER_INPUT_ON_FISCAL_RECEIPT: EnumField<
      InfoCodeFiscalTexts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEXT_FOR_FISCAL_RECEIPT: OrderableEdmTypeField<
      InfoCodeFiscalTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InfoCodeFiscalTexts<DeSerializers>>;
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
         * Static representation of the {@link infoCodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFO_CODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InfoCodeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subcodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcodeNumber',
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
         * Static representation of the {@link printUserInputOnFiscalReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_USER_INPUT_ON_FISCAL_RECEIPT: fieldBuilder.buildEnumField(
          'PrintUserInputOnFiscalReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link textForFiscalReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_FOR_FISCAL_RECEIPT: fieldBuilder.buildEdmTypeField(
          'TextForFiscalReceipt',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InfoCodeFiscalTexts)
      };
    }

    return this._schema;
  }
}
