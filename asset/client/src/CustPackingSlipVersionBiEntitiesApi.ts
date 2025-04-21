/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustPackingSlipVersionBiEntities } from './CustPackingSlipVersionBiEntities';
import { CustPackingSlipVersionBiEntitiesRequestBuilder } from './CustPackingSlipVersionBiEntitiesRequestBuilder';
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
export class CustPackingSlipVersionBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustPackingSlipVersionBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustPackingSlipVersionBiEntitiesApi<DeSerializersT> {
    return new CustPackingSlipVersionBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustPackingSlipVersionBiEntities;

  requestBuilder(): CustPackingSlipVersionBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustPackingSlipVersionBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustPackingSlipVersionBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustPackingSlipVersionBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustPackingSlipVersionBiEntities<DeSerializersT>,
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
    typeof CustPackingSlipVersionBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustPackingSlipVersionBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUST_PACKING_SLIP_JOUR: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VERSION_DATE_TIME: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTERNAL_PACKING_SLIP_ID: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      CustPackingSlipVersionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustPackingSlipVersionBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link custPackingSlipJour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_PACKING_SLIP_JOUR: fieldBuilder.buildEdmTypeField(
          'CustPackingSlipJour',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link versionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'VersionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link volume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME: fieldBuilder.buildEdmTypeField('Volume', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link internalPackingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'InternalPackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustPackingSlipVersionBiEntities)
      };
    }

    return this._schema;
  }
}
