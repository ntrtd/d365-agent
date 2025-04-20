/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ParsingSetups } from './ParsingSetups';
import { ParsingSetupsRequestBuilder } from './ParsingSetupsRequestBuilder';
import { NoYes } from './NoYes';
import { Whsgs1Type } from './Whsgs1Type';
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
export class ParsingSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ParsingSetups<DeSerializersT>, DeSerializersT>
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
  ): ParsingSetupsApi<DeSerializersT> {
    return new ParsingSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ParsingSetups;

  requestBuilder(): ParsingSetupsRequestBuilder<DeSerializersT> {
    return new ParsingSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ParsingSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ParsingSetups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ParsingSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ParsingSetups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ParsingSetups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IDENTIFIER: OrderableEdmTypeField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DECIMAL: EnumField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LENGTH: OrderableEdmTypeField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FIXED_LENGTH: EnumField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADD_IDENTIFIER: EnumField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      ParsingSetups<DeSerializers>,
      DeSerializersT,
      Whsgs1Type,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ParsingSetups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link identifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'Identifier',
          'Edm.String',
          false
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
         * Static representation of the {@link isDecimal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DECIMAL: fieldBuilder.buildEnumField('IsDecimal', NoYes, true),
        /**
         * Static representation of the {@link length} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH: fieldBuilder.buildEdmTypeField('Length', 'Edm.Int32', false),
        /**
         * Static representation of the {@link isFixedLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_LENGTH: fieldBuilder.buildEnumField(
          'IsFixedLength',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_IDENTIFIER: fieldBuilder.buildEnumField(
          'AddIdentifier',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', Whsgs1Type, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ParsingSetups)
      };
    }

    return this._schema;
  }
}
