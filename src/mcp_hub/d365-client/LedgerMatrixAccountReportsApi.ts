/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerMatrixAccountReports } from './LedgerMatrixAccountReports';
import { LedgerMatrixAccountReportsRequestBuilder } from './LedgerMatrixAccountReportsRequestBuilder';
import { AmountDisplaySignCn } from './AmountDisplaySignCn';
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
export class LedgerMatrixAccountReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerMatrixAccountReports<DeSerializersT>, DeSerializersT>
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
  ): LedgerMatrixAccountReportsApi<DeSerializersT> {
    return new LedgerMatrixAccountReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerMatrixAccountReports;

  requestBuilder(): LedgerMatrixAccountReportsRequestBuilder<DeSerializersT> {
    return new LedgerMatrixAccountReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerMatrixAccountReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerMatrixAccountReports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerMatrixAccountReports<DeSerializersT>,
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
    typeof LedgerMatrixAccountReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerMatrixAccountReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerMatrixAccountReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_MATRIX: OrderableEdmTypeField<
      LedgerMatrixAccountReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_LEVEL_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      LedgerMatrixAccountReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerMatrixAccountReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      LedgerMatrixAccountReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT: EnumField<
      LedgerMatrixAccountReports<DeSerializers>,
      DeSerializersT,
      AmountDisplaySignCn,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerMatrixAccountReports<DeSerializers>>;
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
         * Static representation of the {@link accountMatrix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_MATRIX: fieldBuilder.buildEdmTypeField(
          'AccountMatrix',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subLevelMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_LEVEL_MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'SubLevelMainAccountId',
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
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEnumField(
          'Format',
          AmountDisplaySignCn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerMatrixAccountReports)
      };
    }

    return this._schema;
  }
}
