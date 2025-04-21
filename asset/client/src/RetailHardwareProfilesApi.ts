/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailHardwareProfiles } from './RetailHardwareProfiles';
import { RetailHardwareProfilesRequestBuilder } from './RetailHardwareProfilesRequestBuilder';
import { RetailTerminalsApi } from './RetailTerminalsApi';
import { RetailOposNone } from './RetailOposNone';
import { NoYes } from './NoYes';
import { RetailProfileVersion } from './RetailProfileVersion';
import { RetailManufacturerNone } from './RetailManufacturerNone';
import { Abc } from './Abc';
import { RetailNoneDownloadFlash } from './RetailNoneDownloadFlash';
import { RetailLeftCenterRight } from './RetailLeftCenterRight';
import { RetailEftConfiguration } from './RetailEftConfiguration';
import { RetailDualDisplayTypeBase } from './RetailDualDisplayTypeBase';
import { RetailCashChanger } from './RetailCashChanger';
import { RetailOposLogin } from './RetailOposLogin';
import { RetailPeripheralType } from './RetailPeripheralType';
import { RetailExternalNone } from './RetailExternalNone';
import { RetailDrawer } from './RetailDrawer';
import { RetailRfidScannerTypeBase } from './RetailRfidScannerTypeBase';
import { RetailPinPadType } from './RetailPinPadType';
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
  EdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailHardwareProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailHardwareProfiles<DeSerializersT>, DeSerializersT>
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
  ): RetailHardwareProfilesApi<DeSerializersT> {
    return new RetailHardwareProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTerminal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TERMINAL: OneToManyLink<
      RetailHardwareProfiles<DeSerializersT>,
      DeSerializersT,
      RetailTerminalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTerminalsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TERMINAL: new OneToManyLink('RetailTerminal', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailHardwareProfiles;

  requestBuilder(): RetailHardwareProfilesRequestBuilder<DeSerializersT> {
    return new RetailHardwareProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailHardwareProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailHardwareProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailHardwareProfiles<DeSerializersT>,
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
    typeof RetailHardwareProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailHardwareProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_PASSWORD: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER_2_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARD_TOTAL: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    PRINTER_1_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_1_CHARACTERSET: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_MAXIMUM_CARD_PAYMENTS: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HARD_TOTAL_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER_1_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCALE_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_CLOSED_LINE_2: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELAY_FOR_LINKED_ITEMS: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_ELECTRONIC_FUNDS_TRANSFER_SERVICE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DRAWER_2_USE_CASH_DRAWER_POOL: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HARD_TOTAL_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFILE_VERSION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailProfileVersion,
      true,
      true
    >;
    PRINTER_1_RECEIPT_PROFILE_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTER: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailManufacturerNone,
      true,
      true
    >;
    RADIO_FREQUENCY_ID_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURE_EXTRA_DATA: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    SCANNER_1: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    PHARMACY_HOST: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUAL_DISPLAY_RECEIPT_PERCENTAGE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIGNATURE_CAPTURE_FORM_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUAL_DISPLAY_IMAGE_INTERVAL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_COMPANY_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_RECEIPT_PROFILE_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_DEVICE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    MAGNETIC_INK_CHARACTER_RECOGNITION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    DRAWER_2_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOGO: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailNoneDownloadFlash,
      true,
      true
    >;
    DISPLAY_LINKED_ITEM: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGO_ALIGNMENT: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailLeftCenterRight,
      true,
      true
    >;
    PHARMACY: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_Y_POSITION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DRAWER_2_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTER_CONFIG_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_CONFIGURATION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailEftConfiguration,
      true,
      true
    >;
    DUAL_DISPLAY_TYPE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailDualDisplayTypeBase,
      true,
      true
    >;
    CASH_CHANGER: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailCashChanger,
      true,
      true
    >;
    PRINTER_2_LOGO_ALIGNMENT: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailLeftCenterRight,
      true,
      true
    >;
    PRINTER_2_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYLOCK: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposLogin,
      true,
      true
    >;
    PIN_PAD_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER_2_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_SERVER_PORT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCALE_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_1_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_CHARACTER_SET: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAGNETIC_INK_CHARACTER_RECOGNITION_DRIVER_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_BINARY_CONVERSION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINTER_2: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailPeripheralType,
      true,
      true
    >;
    SCANNER_2_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_INVOICE_LINES: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    KEYLOCK_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailExternalNone,
      true,
      true
    >;
    FISCAL_REGISTER_CONFIG_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCANNER_2: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    CASH_CHANGER_PORT_SETTINGS: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER_1_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_CAPTURE_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_DATA: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIMEOUT_IN_SEC: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISPLAY_TERMINAL_CLOSED: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCANNER_1_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER_1: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailDrawer,
      true,
      true
    >;
    DRAWER_2: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailDrawer,
      true,
      true
    >;
    PRINTER_2_DOCUMENT_INSERT_REMOVAL_TIMEOUT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSED_CAPTION_TELEVISION_PORT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCANNER_2_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAGNETIC_INK_CHARACTER_RECOGNITION_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_CONNECTOR_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_1_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PIN_PAD_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCANNER_1_DECODE_SCAN_DATA: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCALE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_START_TRACK_2_AFTER: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISPLAY_TOTAL_TEXT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_START_TRACK_1: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_LOGO_BITMAP: EdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    DRAWER_1_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_CAPTURE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    DUAL_DISPLAY_BROWSER_URL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_CAPTURE_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTER_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_EXTERNAL_PAYMENTS_DEVICE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SIGNATURE_CAPTURE_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERGED_SELF_SERVICE_PACKAGE_REFERENCE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAGNETIC_STRIPE_READER_END_TRACK_2_SENTINEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RADIO_FREQUENCY_ID_SCANNER_TYPE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailRfidScannerTypeBase,
      true,
      true
    >;
    PRINT_BINARY_CONVERSION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DRAWER_1_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_CAPTION_TELEVISION_CAMERA: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMAGE_PATH: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_CONNECTOR_PROPERTIES: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCANNER_1_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_BINARY_CONVERSION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_BALANCE_TEXT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_MERCHANT_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_REGISTER: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailManufacturerNone,
      true,
      true
    >;
    PRINTER_1_DOCUMENT_INSERT_REMOVAL_TIMEOUT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAGNETIC_STRIPE_READER_END_TRACK_1_SENTINEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_REGISTER_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWER_1_USE_CASH_DRAWER_POOL: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MANUAL_INPUT_ALLOWED: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_CLOSED_LINE_1: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHARMACY_PORT: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CASH_CHANGER_INITIAL_SETTINGS: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_CAPTION_TELEVISION_HOST_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_CAPTURE_MAKE: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_CAPTION_TELEVISION: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGO_BITMAP: EdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PIN_PAD: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailPinPadType,
      true,
      true
    >;
    KEYBOARD_MAPPING_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_CHARACTERSET: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_USER_ID: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTER_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FUNDS_TRANSFER_SERVER_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUAL_DISPLAY_IMAGE_PATH: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCANNER_2_DECODE_SCAN_DATA: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEVICE_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCREEN_KEYBOARD: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_MODEL: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYLOCK_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_REGISTER_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_2_LOGO: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailNoneDownloadFlash,
      true,
      true
    >;
    RADIO_FREQUENCY_ID_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAGNETIC_STRIPE_READER_SEPARATOR_1: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAGNETIC_STRIPE_READER: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailOposNone,
      true,
      true
    >;
    PRINTER_1: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      RetailPeripheralType,
      true,
      true
    >;
    DUAL_DISPLAY: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_PICTURE: EnumField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_X_POSITION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PIN_PAD_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PIN_PAD_DESCRIPTION: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_1_DEVICE_NAME: OrderableEdmTypeField<
      RetailHardwareProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTerminal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TERMINAL: OneToManyLink<
      RetailHardwareProfiles<DeSerializersT>,
      DeSerializersT,
      RetailTerminalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailHardwareProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'DeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferPassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_PASSWORD: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferPassword',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer2Model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_2_MODEL: fieldBuilder.buildEdmTypeField(
          'Drawer2Model',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hardTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARD_TOTAL: fieldBuilder.buildEnumField(
          'HardTotal',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link printer1Make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_MAKE: fieldBuilder.buildEdmTypeField(
          'Printer1Make',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer1Characterset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_CHARACTERSET: fieldBuilder.buildEdmTypeField(
          'Printer1Characterset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicFundsTransferMaximumCardPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_MAXIMUM_CARD_PAYMENTS:
          fieldBuilder.buildEdmTypeField(
            'ElectronicFundsTransferMaximumCardPayments',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link hardTotalDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARD_TOTAL_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'HardTotalDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer1Make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_1_MAKE: fieldBuilder.buildEdmTypeField(
          'Drawer1Make',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scaleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ScaleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2DeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'Printer2DeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayClosedLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_CLOSED_LINE_2: fieldBuilder.buildEdmTypeField(
          'DisplayClosedLine2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link delayForLinkedItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELAY_FOR_LINKED_ITEMS: fieldBuilder.buildEdmTypeField(
          'DelayForLinkedItems',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useElectronicFundsTransferService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ELECTRONIC_FUNDS_TRANSFER_SERVICE: fieldBuilder.buildEnumField(
          'UseElectronicFundsTransferService',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link drawer2UseCashDrawerPool} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_2_USE_CASH_DRAWER_POOL: fieldBuilder.buildEnumField(
          'Drawer2UseCashDrawerPool',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hardTotalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARD_TOTAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'HardTotalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profileVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_VERSION: fieldBuilder.buildEnumField(
          'ProfileVersion',
          RetailProfileVersion,
          true
        ),
        /**
         * Static representation of the {@link printer1ReceiptProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_RECEIPT_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'Printer1ReceiptProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER: fieldBuilder.buildEnumField(
          'FiscalPrinter',
          RetailManufacturerNone,
          true
        ),
        /**
         * Static representation of the {@link radioFrequencyIdDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RADIO_FREQUENCY_ID_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'RadioFrequencyIdDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link captureExtraData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURE_EXTRA_DATA: fieldBuilder.buildEnumField(
          'CaptureExtraData',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link scanner1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_1: fieldBuilder.buildEnumField(
          'Scanner1',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link pharmacyHost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHARMACY_HOST: fieldBuilder.buildEdmTypeField(
          'PharmacyHost',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dualDisplayReceiptPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_DISPLAY_RECEIPT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DualDisplayReceiptPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link signatureCaptureFormName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE_FORM_NAME: fieldBuilder.buildEdmTypeField(
          'SignatureCaptureFormName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReaderMake} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_MAKE: fieldBuilder.buildEdmTypeField(
          'MagneticStripeReaderMake',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dualDisplayImageInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_DISPLAY_IMAGE_INTERVAL: fieldBuilder.buildEdmTypeField(
          'DualDisplayImageInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicFundsTransferCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2ReceiptProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_RECEIPT_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'Printer2ReceiptProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayDevice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_DEVICE: fieldBuilder.buildEnumField(
          'DisplayDevice',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link magneticInkCharacterRecognition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_INK_CHARACTER_RECOGNITION: fieldBuilder.buildEnumField(
          'MagneticInkCharacterRecognition',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link drawer2Make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_2_MAKE: fieldBuilder.buildEdmTypeField(
          'Drawer2Make',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGO: fieldBuilder.buildEnumField(
          'Logo',
          RetailNoneDownloadFlash,
          true
        ),
        /**
         * Static representation of the {@link displayLinkedItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_LINKED_ITEM: fieldBuilder.buildEnumField(
          'DisplayLinkedItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link logoAlignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGO_ALIGNMENT: fieldBuilder.buildEnumField(
          'LogoAlignment',
          RetailLeftCenterRight,
          true
        ),
        /**
         * Static representation of the {@link pharmacy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHARMACY: fieldBuilder.buildEnumField('Pharmacy', NoYes, true),
        /**
         * Static representation of the {@link displayDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DisplayDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formYPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_Y_POSITION: fieldBuilder.buildEdmTypeField(
          'FormYPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link drawer2Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_2_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Drawer2Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPrinterConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'FiscalPrinterConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_CONFIGURATION: fieldBuilder.buildEnumField(
          'ElectronicFundsTransferConfiguration',
          RetailEftConfiguration,
          true
        ),
        /**
         * Static representation of the {@link dualDisplayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_DISPLAY_TYPE: fieldBuilder.buildEnumField(
          'DualDisplayType',
          RetailDualDisplayTypeBase,
          true
        ),
        /**
         * Static representation of the {@link cashChanger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_CHANGER: fieldBuilder.buildEnumField(
          'CashChanger',
          RetailCashChanger,
          true
        ),
        /**
         * Static representation of the {@link printer2LogoAlignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_LOGO_ALIGNMENT: fieldBuilder.buildEnumField(
          'Printer2LogoAlignment',
          RetailLeftCenterRight,
          true
        ),
        /**
         * Static representation of the {@link printer2Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Printer2Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keylock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYLOCK: fieldBuilder.buildEnumField('Keylock', RetailOposLogin, true),
        /**
         * Static representation of the {@link pinPadModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIN_PAD_MODEL: fieldBuilder.buildEdmTypeField(
          'PinPadModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer2DeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_2_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'Drawer2DeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2Model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_MODEL: fieldBuilder.buildEdmTypeField(
          'Printer2Model',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferServerPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_SERVER_PORT: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferServerPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scaleDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'ScaleDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer1Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Printer1Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayCharacterSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_CHARACTER_SET: fieldBuilder.buildEdmTypeField(
          'DisplayCharacterSet',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link magneticInkCharacterRecognitionDriverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_INK_CHARACTER_RECOGNITION_DRIVER_NAME:
          fieldBuilder.buildEdmTypeField(
            'MagneticInkCharacterRecognitionDriverName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link printer2BinaryConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_BINARY_CONVERSION: fieldBuilder.buildEnumField(
          'Printer2BinaryConversion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printer2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2: fieldBuilder.buildEnumField(
          'Printer2',
          RetailPeripheralType,
          true
        ),
        /**
         * Static representation of the {@link scanner2DeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_2_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'Scanner2DeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxInvoiceLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INVOICE_LINES: fieldBuilder.buildEdmTypeField(
          'MaxInvoiceLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link keylockDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYLOCK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'KeylockDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER: fieldBuilder.buildEnumField(
          'ElectronicFundsTransfer',
          RetailExternalNone,
          true
        ),
        /**
         * Static representation of the {@link fiscalRegisterConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_REGISTER_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'FiscalRegisterConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scanner2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_2: fieldBuilder.buildEnumField(
          'Scanner2',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link cashChangerPortSettings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_CHANGER_PORT_SETTINGS: fieldBuilder.buildEdmTypeField(
          'CashChangerPortSettings',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer1Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_1_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Drawer1Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureCaptureModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE_MODEL: fieldBuilder.buildEdmTypeField(
          'SignatureCaptureModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_DATA: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeoutInSec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMEOUT_IN_SEC: fieldBuilder.buildEdmTypeField(
          'TimeoutInSec',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link displayTerminalClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TERMINAL_CLOSED: fieldBuilder.buildEnumField(
          'DisplayTerminalClosed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scanner1DeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_1_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'Scanner1DeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_1: fieldBuilder.buildEnumField('Drawer1', RetailDrawer, true),
        /**
         * Static representation of the {@link drawer2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_2: fieldBuilder.buildEnumField('Drawer2', RetailDrawer, true),
        /**
         * Static representation of the {@link printer2DocumentInsertRemovalTimeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_DOCUMENT_INSERT_REMOVAL_TIMEOUT:
          fieldBuilder.buildEdmTypeField(
            'Printer2DocumentInsertRemovalTimeout',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link closedCaptionTelevisionPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_CAPTION_TELEVISION_PORT: fieldBuilder.buildEdmTypeField(
          'ClosedCaptionTelevisionPort',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scanner2Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_2_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Scanner2Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReaderDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'MagneticStripeReaderDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link magneticInkCharacterRecognitionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_INK_CHARACTER_RECOGNITION_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'MagneticInkCharacterRecognitionDescription',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link electronicFundsTransferConnectorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_CONNECTOR_NAME:
          fieldBuilder.buildEdmTypeField(
            'ElectronicFundsTransferConnectorName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link printer1Model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_MODEL: fieldBuilder.buildEdmTypeField(
          'Printer1Model',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pinPadMake} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIN_PAD_MAKE: fieldBuilder.buildEdmTypeField(
          'PinPadMake',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scanner1DecodeScanData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_1_DECODE_SCAN_DATA: fieldBuilder.buildEnumField(
          'Scanner1DecodeScanData',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReaderDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MagneticStripeReaderDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE: fieldBuilder.buildEnumField('Scale', RetailOposNone, true),
        /**
         * Static representation of the {@link magneticStripeReaderStartTrack2After} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_START_TRACK_2_AFTER:
          fieldBuilder.buildEdmTypeField(
            'MagneticStripeReaderStartTrack2After',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link displayTotalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TOTAL_TEXT: fieldBuilder.buildEdmTypeField(
          'DisplayTotalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReaderStartTrack1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_START_TRACK_1: fieldBuilder.buildEdmTypeField(
          'MagneticStripeReaderStartTrack1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2LogoBitmap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_LOGO_BITMAP: fieldBuilder.buildEdmTypeField(
          'Printer2LogoBitmap',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link drawer1DeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_1_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'Drawer1DeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureCapture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE: fieldBuilder.buildEnumField(
          'SignatureCapture',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link dualDisplayBrowserUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_DISPLAY_BROWSER_URL: fieldBuilder.buildEdmTypeField(
          'DualDisplayBrowserUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureCaptureDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SignatureCaptureDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPrinterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'FiscalPrinterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useExternalPaymentsDevice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_EXTERNAL_PAYMENTS_DEVICE: fieldBuilder.buildEnumField(
          'UseExternalPaymentsDevice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link signatureCaptureDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'SignatureCaptureDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mergedSelfServicePackageReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERGED_SELF_SERVICE_PACKAGE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'MergedSelfServicePackageReference',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link magneticStripeReaderEndTrack2Sentinel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_END_TRACK_2_SENTINEL:
          fieldBuilder.buildEdmTypeField(
            'MagneticStripeReaderEndTrack2Sentinel',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link radioFrequencyIdScannerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RADIO_FREQUENCY_ID_SCANNER_TYPE: fieldBuilder.buildEnumField(
          'RadioFrequencyIdScannerType',
          RetailRfidScannerTypeBase,
          true
        ),
        /**
         * Static representation of the {@link printBinaryConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BINARY_CONVERSION: fieldBuilder.buildEnumField(
          'PrintBinaryConversion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link drawer1Model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_1_MODEL: fieldBuilder.buildEdmTypeField(
          'Drawer1Model',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closedCaptionTelevisionCamera} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_CAPTION_TELEVISION_CAMERA: fieldBuilder.buildEdmTypeField(
          'ClosedCaptionTelevisionCamera',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link imagePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE_PATH: fieldBuilder.buildEdmTypeField(
          'ImagePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link electronicFundsTransferConnectorProperties} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_CONNECTOR_PROPERTIES:
          fieldBuilder.buildEdmTypeField(
            'ElectronicFundsTransferConnectorProperties',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link scanner1Description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_1_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Scanner1Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayBinaryConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_BINARY_CONVERSION: fieldBuilder.buildEnumField(
          'DisplayBinaryConversion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayBalanceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_BALANCE_TEXT: fieldBuilder.buildEdmTypeField(
          'DisplayBalanceText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2Make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_MAKE: fieldBuilder.buildEdmTypeField(
          'Printer2Make',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferMerchantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_MERCHANT_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferMerchantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_REGISTER: fieldBuilder.buildEnumField(
          'FiscalRegister',
          RetailManufacturerNone,
          true
        ),
        /**
         * Static representation of the {@link printer1DocumentInsertRemovalTimeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_DOCUMENT_INSERT_REMOVAL_TIMEOUT:
          fieldBuilder.buildEdmTypeField(
            'Printer1DocumentInsertRemovalTimeout',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link magneticStripeReaderEndTrack1Sentinel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_END_TRACK_1_SENTINEL:
          fieldBuilder.buildEdmTypeField(
            'MagneticStripeReaderEndTrack1Sentinel',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link fiscalRegisterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_REGISTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'FiscalRegisterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link drawer1UseCashDrawerPool} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER_1_USE_CASH_DRAWER_POOL: fieldBuilder.buildEnumField(
          'Drawer1UseCashDrawerPool',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isManualInputAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANUAL_INPUT_ALLOWED: fieldBuilder.buildEnumField(
          'IsManualInputAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayClosedLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_CLOSED_LINE_1: fieldBuilder.buildEdmTypeField(
          'DisplayClosedLine1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pharmacyPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHARMACY_PORT: fieldBuilder.buildEdmTypeField(
          'PharmacyPort',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cashChangerInitialSettings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_CHANGER_INITIAL_SETTINGS: fieldBuilder.buildEdmTypeField(
          'CashChangerInitialSettings',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closedCaptionTelevisionHostName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_CAPTION_TELEVISION_HOST_NAME: fieldBuilder.buildEdmTypeField(
          'ClosedCaptionTelevisionHostName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureCaptureMake} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_CAPTURE_MAKE: fieldBuilder.buildEdmTypeField(
          'SignatureCaptureMake',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closedCaptionTelevision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_CAPTION_TELEVISION: fieldBuilder.buildEnumField(
          'ClosedCaptionTelevision',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link logoBitmap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGO_BITMAP: fieldBuilder.buildEdmTypeField(
          'LogoBitmap',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link pinPad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIN_PAD: fieldBuilder.buildEnumField('PinPad', RetailPinPadType, true),
        /**
         * Static representation of the {@link keyboardMappingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYBOARD_MAPPING_ID: fieldBuilder.buildEdmTypeField(
          'KeyboardMappingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2Characterset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_CHARACTERSET: fieldBuilder.buildEdmTypeField(
          'Printer2Characterset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicFundsTransferUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_USER_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPrinterDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalPrinterDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicFundsTransferServerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FUNDS_TRANSFER_SERVER_NAME: fieldBuilder.buildEdmTypeField(
          'ElectronicFundsTransferServerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dualDisplayImagePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_DISPLAY_IMAGE_PATH: fieldBuilder.buildEdmTypeField(
          'DualDisplayImagePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scanner2DecodeScanData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCANNER_2_DECODE_SCAN_DATA: fieldBuilder.buildEnumField(
          'Scanner2DecodeScanData',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deviceDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVICE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeviceDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link screenKeyboard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCREEN_KEYBOARD: fieldBuilder.buildEnumField(
          'ScreenKeyboard',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReaderModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_MODEL: fieldBuilder.buildEdmTypeField(
          'MagneticStripeReaderModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keylockDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYLOCK_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'KeylockDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalRegisterDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_REGISTER_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalRegisterDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer2Logo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_2_LOGO: fieldBuilder.buildEnumField(
          'Printer2Logo',
          RetailNoneDownloadFlash,
          true
        ),
        /**
         * Static representation of the {@link radioFrequencyIdDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RADIO_FREQUENCY_ID_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RadioFrequencyIdDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReaderSeparator1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER_SEPARATOR_1: fieldBuilder.buildEdmTypeField(
          'MagneticStripeReaderSeparator1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link magneticStripeReader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNETIC_STRIPE_READER: fieldBuilder.buildEnumField(
          'MagneticStripeReader',
          RetailOposNone,
          true
        ),
        /**
         * Static representation of the {@link printer1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1: fieldBuilder.buildEnumField(
          'Printer1',
          RetailPeripheralType,
          true
        ),
        /**
         * Static representation of the {@link dualDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_DISPLAY: fieldBuilder.buildEnumField('DualDisplay', NoYes, true),
        /**
         * Static representation of the {@link showPicture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_PICTURE: fieldBuilder.buildEnumField('ShowPicture', NoYes, true),
        /**
         * Static representation of the {@link displayDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'DisplayDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formXPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_X_POSITION: fieldBuilder.buildEdmTypeField(
          'FormXPosition',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pinPadDeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIN_PAD_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'PinPadDeviceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pinPadDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PIN_PAD_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PinPadDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printer1DeviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_1_DEVICE_NAME: fieldBuilder.buildEdmTypeField(
          'Printer1DeviceName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailHardwareProfiles)
      };
    }

    return this._schema;
  }
}
