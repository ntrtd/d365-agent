/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerStatementDefinitions } from './LedgerStatementDefinitions';
import { LedgerStatementDefinitionsRequestBuilder } from './LedgerStatementDefinitionsRequestBuilder';
import { NoYes } from './NoYes';
import { RoundOffType } from './RoundOffType';
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
export class LedgerStatementDefinitionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerStatementDefinitions<DeSerializersT>, DeSerializersT>
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
  ): LedgerStatementDefinitionsApi<DeSerializersT> {
    return new LedgerStatementDefinitionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerStatementDefinitions;

  requestBuilder(): LedgerStatementDefinitionsRequestBuilder<DeSerializersT> {
    return new LedgerStatementDefinitionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerStatementDefinitions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerStatementDefinitions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerStatementDefinitions<DeSerializersT>,
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
    typeof LedgerStatementDefinitions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerStatementDefinitions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRITPTION: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVERT_SIGN: EnumField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROUNDING_FORM: EnumField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    TOTAL: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MARK: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT: OrderableEdmTypeField<
      LedgerStatementDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerStatementDefinitions<DeSerializers>>;
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
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link descritption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRITPTION: fieldBuilder.buildEdmTypeField(
          'Descritption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invertSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVERT_SIGN: fieldBuilder.buildEnumField('InvertSign', NoYes, true),
        /**
         * Static representation of the {@link roundingForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_FORM: fieldBuilder.buildEnumField(
          'RoundingForm',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link total} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL: fieldBuilder.buildEdmTypeField('Total', 'Edm.Int32', false),
        /**
         * Static representation of the {@link mark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK: fieldBuilder.buildEdmTypeField('Mark', 'Edm.String', true),
        /**
         * Static representation of the {@link groupOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'GroupOfAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MainAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerStatementDefinitions)
      };
    }

    return this._schema;
  }
}
