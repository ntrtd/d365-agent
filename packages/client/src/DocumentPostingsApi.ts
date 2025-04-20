/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentPostings } from './DocumentPostings';
import { DocumentPostingsRequestBuilder } from './DocumentPostingsRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
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
export class DocumentPostingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentPostings<DeSerializersT>, DeSerializersT>
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
  ): DocumentPostingsApi<DeSerializersT> {
    return new DocumentPostingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocumentPostings;

  requestBuilder(): DocumentPostingsRequestBuilder<DeSerializersT> {
    return new DocumentPostingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentPostings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DocumentPostings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DocumentPostings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DocumentPostings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentPostings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    FACILITY_GROUP: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACILITY_TYPE: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MISC_CHARGES_LEDGER_ACCOUNT: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_LEDGER_ACCOUNT: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARGIN_LEDGER_ACCOUNT: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LG_LIQUIDATION_LEDGER_ACCOUNT: OrderableEdmTypeField<
      DocumentPostings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DocumentPostings<DeSerializers>>;
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
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link facilityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACILITY_GROUP: fieldBuilder.buildEdmTypeField(
          'FacilityGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link facilityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACILITY_TYPE: fieldBuilder.buildEdmTypeField(
          'FacilityType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link miscChargesLedgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_CHARGES_LEDGER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MiscChargesLedgerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleLedgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_LEDGER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SettleLedgerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marginLedgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARGIN_LEDGER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MarginLedgerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lgLiquidationLedgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LG_LIQUIDATION_LEDGER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'LGLiquidationLedgerAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentPostings)
      };
    }

    return this._schema;
  }
}
