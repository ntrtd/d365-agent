/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceTermJournalTables } from './PriceTermJournalTables';
import { PriceTermJournalTablesRequestBuilder } from './PriceTermJournalTablesRequestBuilder';
import { PriceTermJournalTransApi } from './PriceTermJournalTransApi';
import { TableGroupAll } from './TableGroupAll';
import { GupVendCust } from './GupVendCust';
import { GupDisabledEnabled } from './GupDisabledEnabled';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PriceTermJournalTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceTermJournalTables<DeSerializersT>, DeSerializersT>
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
  ): PriceTermJournalTablesApi<DeSerializersT> {
    return new PriceTermJournalTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link gupPriceTermJournalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_PRICE_TERM_JOURNAL_TRANS: OneToManyLink<
      PriceTermJournalTables<DeSerializersT>,
      DeSerializersT,
      PriceTermJournalTransApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PriceTermJournalTransApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GUP_PRICE_TERM_JOURNAL_TRANS: new OneToManyLink(
        'GUPPriceTermJournalTrans',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PriceTermJournalTables;

  requestBuilder(): PriceTermJournalTablesRequestBuilder<DeSerializersT> {
    return new PriceTermJournalTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceTermJournalTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PriceTermJournalTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceTermJournalTables<DeSerializersT>,
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
    typeof PriceTermJournalTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceTermJournalTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_ID: OrderableEdmTypeField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_CODE: EnumField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_CUST: EnumField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      GupVendCust,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      PriceTermJournalTables<DeSerializers>,
      DeSerializersT,
      GupDisabledEnabled,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link gupPriceTermJournalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_PRICE_TERM_JOURNAL_TRANS: OneToManyLink<
      PriceTermJournalTables<DeSerializersT>,
      DeSerializersT,
      PriceTermJournalTransApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PriceTermJournalTables<DeSerializers>>;
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
         * Static representation of the {@link agreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'AgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          true
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendCust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CUST: fieldBuilder.buildEnumField('VendCust', GupVendCust, true),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', GupDisabledEnabled, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceTermJournalTables)
      };
    }

    return this._schema;
  }
}
