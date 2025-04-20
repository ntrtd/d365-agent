/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryProjectConsumptionJournalNames } from './InventoryProjectConsumptionJournalNames';
import { InventoryProjectConsumptionJournalNamesRequestBuilder } from './InventoryProjectConsumptionJournalNamesRequestBuilder';
import { DetailSummary } from './DetailSummary';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { ItemReservation } from './ItemReservation';
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
export class InventoryProjectConsumptionJournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InventoryProjectConsumptionJournalNames<DeSerializersT>,
      DeSerializersT
    >
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
  ): InventoryProjectConsumptionJournalNamesApi<DeSerializersT> {
    return new InventoryProjectConsumptionJournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryProjectConsumptionJournalNames;

  requestBuilder(): InventoryProjectConsumptionJournalNamesRequestBuilder<DeSerializersT> {
    return new InventoryProjectConsumptionJournalNamesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryProjectConsumptionJournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryProjectConsumptionJournalNames<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryProjectConsumptionJournalNames<DeSerializersT>,
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
    typeof InventoryProjectConsumptionJournalNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryProjectConsumptionJournalNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_POSTING_SUMMATION_LEVEL: EnumField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    DEFAULT_VOUCHER_NUMBER_ALLOCATION_RULE: EnumField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      InventJournalVoucherChange,
      true,
      true
    >;
    DEFAULT_INVENTORY_RESERVATION_METHOD: EnumField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    DEFAULT_JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRIVATE_USER_GROUP_ID: OrderableEdmTypeField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VOUCHER_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VOUCHER_NUMBER_SELECTION_RULE: EnumField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    IS_POSTING_DELETING_LINES_BY_DEFAULT: EnumField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_WAREHOUSE_INVENTORY_UPDATE_LOGS: EnumField<
      InventoryProjectConsumptionJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      InventoryProjectConsumptionJournalNames<DeSerializers>
    >;
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
         * Static representation of the {@link defaultPostingSummationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_POSTING_SUMMATION_LEVEL: fieldBuilder.buildEnumField(
          'DefaultPostingSummationLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link defaultVoucherNumberAllocationRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VOUCHER_NUMBER_ALLOCATION_RULE: fieldBuilder.buildEnumField(
          'DefaultVoucherNumberAllocationRule',
          InventJournalVoucherChange,
          true
        ),
        /**
         * Static representation of the {@link defaultInventoryReservationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_RESERVATION_METHOD: fieldBuilder.buildEnumField(
          'DefaultInventoryReservationMethod',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link defaultJournalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DefaultJournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPrivateUserGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRIVATE_USER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPrivateUserGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultVoucherNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VOUCHER_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultVoucherNumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultVoucherNumberSelectionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VOUCHER_NUMBER_SELECTION_RULE: fieldBuilder.buildEnumField(
          'DefaultVoucherNumberSelectionRule',
          JournalVoucherDraw,
          true
        ),
        /**
         * Static representation of the {@link isPostingDeletingLinesByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTING_DELETING_LINES_BY_DEFAULT: fieldBuilder.buildEnumField(
          'IsPostingDeletingLinesByDefault',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeWarehouseInventoryUpdateLogs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_WAREHOUSE_INVENTORY_UPDATE_LOGS: fieldBuilder.buildEnumField(
          'ExcludeWarehouseInventoryUpdateLogs',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryProjectConsumptionJournalNames)
      };
    }

    return this._schema;
  }
}
