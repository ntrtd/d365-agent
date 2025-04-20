/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressFormatLines } from './AddressFormatLines';
import { AddressFormatLinesRequestBuilder } from './AddressFormatLinesRequestBuilder';
import { NoYes } from './NoYes';
import { LogisticsAddressElement } from './LogisticsAddressElement';
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
export class AddressFormatLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressFormatLines<DeSerializersT>, DeSerializersT>
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
  ): AddressFormatLinesApi<DeSerializersT> {
    return new AddressFormatLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AddressFormatLines;

  requestBuilder(): AddressFormatLinesRequestBuilder<DeSerializersT> {
    return new AddressFormatLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressFormatLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressFormatLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressFormatLines<DeSerializersT>,
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
    typeof AddressFormatLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressFormatLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_FORMAT: OrderableEdmTypeField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEPARATOR: OrderableEdmTypeField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOT_ACTIVE: EnumField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_APPLICATION_OBJECT: EnumField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      LogisticsAddressElement,
      true,
      true
    >;
    DATA_ENTRY_ONLY: EnumField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEW_LINE: EnumField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPAND: EnumField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIAL: EnumField<
      AddressFormatLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AddressFormatLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link addressFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_FORMAT: fieldBuilder.buildEdmTypeField(
          'AddressFormat',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link separator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATOR: fieldBuilder.buildEdmTypeField(
          'Separator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_ACTIVE: fieldBuilder.buildEnumField('NotActive', NoYes, true),
        /**
         * Static representation of the {@link addressApplicationObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_APPLICATION_OBJECT: fieldBuilder.buildEnumField(
          'AddressApplicationObject',
          LogisticsAddressElement,
          true
        ),
        /**
         * Static representation of the {@link dataEntryOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_ENTRY_ONLY: fieldBuilder.buildEnumField(
          'DataEntryOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link newLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_LINE: fieldBuilder.buildEnumField('NewLine', NoYes, true),
        /**
         * Static representation of the {@link expand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPAND: fieldBuilder.buildEnumField('Expand', NoYes, true),
        /**
         * Static representation of the {@link special} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL: fieldBuilder.buildEnumField('Special', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressFormatLines)
      };
    }

    return this._schema;
  }
}
