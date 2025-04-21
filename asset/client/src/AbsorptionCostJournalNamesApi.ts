/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsorptionCostJournalNames } from './AbsorptionCostJournalNames';
import { AbsorptionCostJournalNamesRequestBuilder } from './AbsorptionCostJournalNamesRequestBuilder';
import { NoYes } from './NoYes';
import { AcoJournalTypeBr } from './AcoJournalTypeBr';
import { DetailSummary } from './DetailSummary';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { Abc } from './Abc';
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
export class AbsorptionCostJournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AbsorptionCostJournalNames<DeSerializersT>, DeSerializersT>
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
  ): AbsorptionCostJournalNamesApi<DeSerializersT> {
    return new AbsorptionCostJournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AbsorptionCostJournalNames;

  requestBuilder(): AbsorptionCostJournalNamesRequestBuilder<DeSerializersT> {
    return new AbsorptionCostJournalNamesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AbsorptionCostJournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AbsorptionCostJournalNames<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AbsorptionCostJournalNames<DeSerializersT>,
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
    typeof AbsorptionCostJournalNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AbsorptionCostJournalNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETE_LINES_AFTER_POSTING_ENABLED: EnumField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIVATE_FOR_USER_GROUP_ID: OrderableEdmTypeField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      AcoJournalTypeBr,
      true,
      true
    >;
    DETAIL_LEVEL: EnumField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SELECTION_BY: EnumField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    VOUCHER_CHANGE: EnumField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      AbsorptionCostJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AbsorptionCostJournalNames<DeSerializers>>;
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
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
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
         * Static representation of the {@link isDeleteLinesAfterPostingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETE_LINES_AFTER_POSTING_ENABLED: fieldBuilder.buildEnumField(
          'IsDeleteLinesAfterPostingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link privateForUserGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVATE_FOR_USER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PrivateForUserGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          AcoJournalTypeBr,
          true
        ),
        /**
         * Static representation of the {@link detailLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_LEVEL: fieldBuilder.buildEnumField(
          'DetailLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link selectionBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECTION_BY: fieldBuilder.buildEnumField(
          'SelectionBy',
          JournalVoucherDraw,
          true
        ),
        /**
         * Static representation of the {@link voucherChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_CHANGE: fieldBuilder.buildEnumField('VoucherChange', Abc, true),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AbsorptionCostJournalNames)
      };
    }

    return this._schema;
  }
}
