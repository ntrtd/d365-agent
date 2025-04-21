/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectJournalNames } from './ProjectJournalNames';
import { ProjectJournalNamesRequestBuilder } from './ProjectJournalNamesRequestBuilder';
import { ProjJournalVoucherDateChange } from './ProjJournalVoucherDateChange';
import { DetailSummary } from './DetailSummary';
import { ProjJournalType } from './ProjJournalType';
import { ProjJournalVoucherChange } from './ProjJournalVoucherChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
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
export class ProjectJournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectJournalNames<DeSerializersT>, DeSerializersT>
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
  ): ProjectJournalNamesApi<DeSerializersT> {
    return new ProjectJournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectJournalNames;

  requestBuilder(): ProjectJournalNamesRequestBuilder<DeSerializersT> {
    return new ProjectJournalNamesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectJournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectJournalNames<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectJournalNames<DeSerializersT>,
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
    typeof ProjectJournalNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectJournalNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SET_VOUCHER_DATE_TO: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      ProjJournalVoucherDateChange,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAIL_SUMMARY: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      ProjJournalType,
      true,
      true
    >;
    NEW_VOUCHER_BY: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      ProjJournalVoucherChange,
      true,
      true
    >;
    SELECTION_BY: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    ARE_LINES_DELETED_AFTER_POSTING: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVE: OrderableEdmTypeField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOW_START_OR_END_TIMES: EnumField<
      ProjectJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectJournalNames<DeSerializers>>;
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
         * Static representation of the {@link setVoucherDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_VOUCHER_DATE_TO: fieldBuilder.buildEnumField(
          'SetVoucherDateTo',
          ProjJournalVoucherDateChange,
          true
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
         * Static representation of the {@link detailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'DetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          ProjJournalType,
          true
        ),
        /**
         * Static representation of the {@link newVoucherBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_VOUCHER_BY: fieldBuilder.buildEnumField(
          'NewVoucherBy',
          ProjJournalVoucherChange,
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
         * Static representation of the {@link areLinesDeletedAfterPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_LINES_DELETED_AFTER_POSTING: fieldBuilder.buildEnumField(
          'AreLinesDeletedAfterPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link approve} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVE: fieldBuilder.buildEdmTypeField('Approve', 'Edm.String', true),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link showStartOrEndTimes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_START_OR_END_TIMES: fieldBuilder.buildEnumField(
          'ShowStartOrEndTimes',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectJournalNames)
      };
    }

    return this._schema;
  }
}
