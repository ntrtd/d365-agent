/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowMgmtJourNameSourceLists } from './CashFlowMgmtJourNameSourceLists';
import { CashFlowMgmtJourNameSourceListsRequestBuilder } from './CashFlowMgmtJourNameSourceListsRequestBuilder';
import { CfmJournalTransSourceType } from './CfmJournalTransSourceType';
import { CfmCashFlowDirection } from './CfmCashFlowDirection';
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
export class CashFlowMgmtJourNameSourceListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CashFlowMgmtJourNameSourceLists<DeSerializersT>, DeSerializersT>
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
  ): CashFlowMgmtJourNameSourceListsApi<DeSerializersT> {
    return new CashFlowMgmtJourNameSourceListsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CashFlowMgmtJourNameSourceLists;

  requestBuilder(): CashFlowMgmtJourNameSourceListsRequestBuilder<DeSerializersT> {
    return new CashFlowMgmtJourNameSourceListsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CashFlowMgmtJourNameSourceLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CashFlowMgmtJourNameSourceLists<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CashFlowMgmtJourNameSourceLists<DeSerializersT>,
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
    typeof CashFlowMgmtJourNameSourceLists,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashFlowMgmtJourNameSourceLists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CashFlowMgmtJourNameSourceLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CashFlowMgmtJourNameSourceLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_DATA_SOURCE: EnumField<
      CashFlowMgmtJourNameSourceLists<DeSerializers>,
      DeSerializersT,
      CfmJournalTransSourceType,
      true,
      true
    >;
    DIRECTION: EnumField<
      CashFlowMgmtJourNameSourceLists<DeSerializers>,
      DeSerializersT,
      CfmCashFlowDirection,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CashFlowMgmtJourNameSourceLists<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link journalDataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DATA_SOURCE: fieldBuilder.buildEnumField(
          'JournalDataSource',
          CfmJournalTransSourceType,
          true
        ),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField(
          'Direction',
          CfmCashFlowDirection,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashFlowMgmtJourNameSourceLists)
      };
    }

    return this._schema;
  }
}
