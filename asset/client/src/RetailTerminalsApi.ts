/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTerminals } from './RetailTerminals';
import { RetailTerminalsRequestBuilder } from './RetailTerminalsRequestBuilder';
import { RetailVisualProfilesApi } from './RetailVisualProfilesApi';
import { RetailStoresApi } from './RetailStoresApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RetailHardwareProfilesApi } from './RetailHardwareProfilesApi';
import { NoYes } from './NoYes';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
import { RetailTerminalStoreBase } from './RetailTerminalStoreBase';
import { RetailPosAutoExitMethod } from './RetailPosAutoExitMethod';
import { RetailNoneItemBarcodeItem } from './RetailNoneItemBarcodeItem';
import { RetailClosingStatus } from './RetailClosingStatus';
import { RetailCnpProcessingConfiguration } from './RetailCnpProcessingConfiguration';
import { RetailTerminalOperationMode } from './RetailTerminalOperationMode';
import { RetailNoneTotalAllBase } from './RetailNoneTotalAllBase';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTerminalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTerminals<DeSerializersT>, DeSerializersT>
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
  ): RetailTerminalsApi<DeSerializersT> {
    return new RetailTerminalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailVisualProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_VISUAL_PROFILE: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      RetailVisualProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailHardwareProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_HARDWARE_PROFILE: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      RetailHardwareProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailVisualProfilesApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      RetailHardwareProfilesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_VISUAL_PROFILE: new OneToOneLink(
        'RetailVisualProfile',
        this,
        linkedApis[0]
      ),
      RETAIL_STORE: new OneToOneLink('RetailStore', this, linkedApis[1]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[2]),
      RETAIL_HARDWARE_PROFILE: new OneToOneLink(
        'RetailHardwareProfile',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RetailTerminals;

  requestBuilder(): RetailTerminalsRequestBuilder<DeSerializersT> {
    return new RetailTerminalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTerminals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailTerminals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailTerminals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailTerminals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTerminals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TERMINAL_NUMBER: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SELECT_HARDWARE_STATION_ON_TENDERING: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_LOGOFF_TIMEOUT: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_METHOD: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailStaffTerminalTotal,
      true,
      true
    >;
    RETURN_IN_TRANSACTION: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMINAL_STATEMENT: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_SETUP_LOCATION: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailTerminalStoreBase,
      true,
      true
    >;
    HARDWARE_PROFILE: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_PRINTING_DEFAULT_OFF: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFLINE_DATABASE_PROFILE_NAME: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_OFFLINE: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_RECEIPT_TEXT_LENGTH: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_DISPLAY_TEXT_1: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONLY_TOTAL_IN_SUSPENDED_TRANSACTION: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_BARCODE: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_EXIT_METHOD: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailPosAutoExitMethod,
      true,
      true
    >;
    PRINT_TAX_REFUND_CHECKS: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLAYBACK_RECORDING: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPEN_DRAWER_AT_LAST_IN_LAST_OUT: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_NUMBER_ON_RECEIPT: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailNoneItemBarcodeItem,
      true,
      true
    >;
    EXIT_AFTER_EACH_TRANSACTION: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SELF_CHECKOUT: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSING_STATUS: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailClosingStatus,
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NOT_PRESENT_PROCESSING_CONFIGURATION: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailCnpProcessingConfiguration,
      true,
      true
    >;
    NUMBER_OF_TOP_BOTTOM_LINES: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_TENDER_TYPE_ID_DEFAULT: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VISUAL_PROFILE: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_TERMINAL_OPERATION_MODE: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailTerminalOperationMode,
      true,
      true
    >;
    MANAGER_KEY_ON_RETURN: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAND_ALONE: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SLIP_IF_RETURN: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      RetailNoneTotalAllBase,
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_TERMINAL: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_SERVICE_PORT: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_DIMENSION_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_RECORDING: EnumField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_DISPLAY_TEXT_LENGTH: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STORE_NUMBER_FOR_ELECTRONIC_FUNDS_TRANSFER: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_DISPLAY_TEXT_2: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNET_PROTOCOL_ADDRESS: OrderableEdmTypeField<
      RetailTerminals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailVisualProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_VISUAL_PROFILE: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      RetailVisualProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailHardwareProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_HARDWARE_PROFILE: OneToOneLink<
      RetailTerminals<DeSerializersT>,
      DeSerializersT,
      RetailHardwareProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTerminals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link terminalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TerminalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link selectHardwareStationOnTendering} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECT_HARDWARE_STATION_ON_TENDERING: fieldBuilder.buildEnumField(
          'SelectHardwareStationOnTendering',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoLogoffTimeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_LOGOFF_TIMEOUT: fieldBuilder.buildEdmTypeField(
          'AutoLogoffTimeout',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link statementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_METHOD: fieldBuilder.buildEnumField(
          'StatementMethod',
          RetailStaffTerminalTotal,
          true
        ),
        /**
         * Static representation of the {@link returnInTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_IN_TRANSACTION: fieldBuilder.buildEnumField(
          'ReturnInTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link terminalStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_STATEMENT: fieldBuilder.buildEnumField(
          'TerminalStatement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptSetupLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_SETUP_LOCATION: fieldBuilder.buildEnumField(
          'ReceiptSetupLocation',
          RetailTerminalStoreBase,
          true
        ),
        /**
         * Static representation of the {@link hardwareProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_PROFILE: fieldBuilder.buildEdmTypeField(
          'HardwareProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptPrintingDefaultOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_PRINTING_DEFAULT_OFF: fieldBuilder.buildEnumField(
          'ReceiptPrintingDefaultOff',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offlineDatabaseProfileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFLINE_DATABASE_PROFILE_NAME: fieldBuilder.buildEdmTypeField(
          'OfflineDatabaseProfileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_OFFLINE: fieldBuilder.buildEnumField(
          'SupportOffline',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxReceiptTextLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_RECEIPT_TEXT_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaxReceiptTextLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerDisplayText1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISPLAY_TEXT_1: fieldBuilder.buildEdmTypeField(
          'CustomerDisplayText1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onlyTotalInSuspendedTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONLY_TOTAL_IN_SUSPENDED_TRANSACTION: fieldBuilder.buildEnumField(
          'OnlyTotalInSuspendedTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_BARCODE: fieldBuilder.buildEnumField(
          'ReceiptBarcode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link autoExitMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_EXIT_METHOD: fieldBuilder.buildEnumField(
          'AutoExitMethod',
          RetailPosAutoExitMethod,
          true
        ),
        /**
         * Static representation of the {@link printTaxRefundChecks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_TAX_REFUND_CHECKS: fieldBuilder.buildEnumField(
          'PrintTaxRefundChecks',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link playbackRecording} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAYBACK_RECORDING: fieldBuilder.buildEnumField(
          'PlaybackRecording',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link openDrawerAtLastInLastOut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_DRAWER_AT_LAST_IN_LAST_OUT: fieldBuilder.buildEnumField(
          'OpenDrawerAtLastInLastOut',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productNumberOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER_ON_RECEIPT: fieldBuilder.buildEnumField(
          'ProductNumberOnReceipt',
          RetailNoneItemBarcodeItem,
          true
        ),
        /**
         * Static representation of the {@link exitAfterEachTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXIT_AFTER_EACH_TRANSACTION: fieldBuilder.buildEnumField(
          'ExitAfterEachTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link selfCheckout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_CHECKOUT: fieldBuilder.buildEnumField('SelfCheckout', NoYes, true),
        /**
         * Static representation of the {@link closingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_STATUS: fieldBuilder.buildEnumField(
          'ClosingStatus',
          RetailClosingStatus,
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardNotPresentProcessingConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NOT_PRESENT_PROCESSING_CONFIGURATION: fieldBuilder.buildEnumField(
          'CardNotPresentProcessingConfiguration',
          RetailCnpProcessingConfiguration,
          true
        ),
        /**
         * Static representation of the {@link numberOfTopBottomLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_TOP_BOTTOM_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfTopBottomLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicFundsTransferTenderTypeIdDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_TENDER_TYPE_ID_DEFAULT:
          fieldBuilder.buildEdmTypeField(
            'ElectronicFundsTransferTenderTypeIdDefault',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link visualProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISUAL_PROFILE: fieldBuilder.buildEdmTypeField(
          'VisualProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailTerminalOperationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TERMINAL_OPERATION_MODE: fieldBuilder.buildEnumField(
          'RetailTerminalOperationMode',
          RetailTerminalOperationMode,
          true
        ),
        /**
         * Static representation of the {@link managerKeyOnReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_KEY_ON_RETURN: fieldBuilder.buildEnumField(
          'ManagerKeyOnReturn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link standAlone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAND_ALONE: fieldBuilder.buildEnumField('StandAlone', NoYes, true),
        /**
         * Static representation of the {@link slipIfReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SLIP_IF_RETURN: fieldBuilder.buildEnumField(
          'SlipIfReturn',
          RetailNoneTotalAllBase,
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_TERMINAL: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updateServicePort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_SERVICE_PORT: fieldBuilder.buildEdmTypeField(
          'UpdateServicePort',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createRecording} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_RECORDING: fieldBuilder.buildEnumField(
          'CreateRecording',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxDisplayTextLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISPLAY_TEXT_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaxDisplayTextLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link storeNumberForElectronicFundsTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER_FOR_ELECTRONIC_FUNDS_TRANSFER:
          fieldBuilder.buildEdmTypeField(
            'StoreNumberForElectronicFundsTransfer',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerDisplayText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISPLAY_TEXT_2: fieldBuilder.buildEdmTypeField(
          'CustomerDisplayText2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internetProtocolAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_PROTOCOL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetProtocolAddress',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTerminals)
      };
    }

    return this._schema;
  }
}
