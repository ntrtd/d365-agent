// @ts-nocheck
import type { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  WarrantyTransactionSalesId,
  DirParametersId,
  PriceTermJournalTransId,
  SalesAutomaticSalesDocumentHeaderChargeId,
  GupParametersId,
  BusinessDocumentDocumentParametersId,
  SalesAutomaticSalesDocumentHeaderChargesId,
  CdsPostalAddressHistoryId,
  PartyLocationPrivateRolesId,
  ReturnFormatErrorCodesId,
  CustomerParametersId,
  SalesInvoiceQrCodeId,
  SubBillMassTerminationScheduleHeaderAndLinesId,
  DeliveryModeId,
  BusinessDocumentElectronicInvoiceFrameworkTableEntityId,
  SalesAgreementSalesTransId,
  MixAndMatchLineGroupsId,
  CdsPostalAddressHistoryV2Id,
  WarrantyTransactionSales,
  EditableWarrantyTransactionSales,
  DirParameters,
  EditableDirParameters,
  PriceTermJournalTrans,
  EditablePriceTermJournalTrans,
  SalesAutomaticSalesDocumentHeaderCharge,
  EditableSalesAutomaticSalesDocumentHeaderCharge,
  GupParameters,
  EditableGupParameters,
  BusinessDocumentDocumentParameters,
  EditableBusinessDocumentDocumentParameters,
  SalesAutomaticSalesDocumentHeaderCharges,
  EditableSalesAutomaticSalesDocumentHeaderCharges,
  CdsPostalAddressHistory,
  EditableCdsPostalAddressHistory,
  PartyLocationPrivateRoles,
  EditablePartyLocationPrivateRoles,
  ReturnFormatErrorCodes,
  EditableReturnFormatErrorCodes,
  CustomerParameters,
  EditableCustomerParameters,
  SalesInvoiceQrCode,
  EditableSalesInvoiceQrCode,
  SubBillMassTerminationScheduleHeaderAndLines,
  EditableSubBillMassTerminationScheduleHeaderAndLines,
  DeliveryMode,
  EditableDeliveryMode,
  BusinessDocumentElectronicInvoiceFrameworkTableEntity,
  EditableBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  SalesAgreementSalesTrans,
  EditableSalesAgreementSalesTrans,
  MixAndMatchLineGroups,
  EditableMixAndMatchLineGroups,
  CdsPostalAddressHistoryV2,
  EditableCdsPostalAddressHistoryV2,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QWarrantyTransactionSales,
  QDirParameters,
  QPriceTermJournalTrans,
  QSalesAutomaticSalesDocumentHeaderCharge,
  QGupParameters,
  QBusinessDocumentDocumentParameters,
  QSalesAutomaticSalesDocumentHeaderCharges,
  QCdsPostalAddressHistory,
  QPartyLocationPrivateRoles,
  QReturnFormatErrorCodes,
  QCustomerParameters,
  QSalesInvoiceQrCode,
  QSubBillMassTerminationScheduleHeaderAndLines,
  QDeliveryMode,
  QBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  QSalesAgreementSalesTrans,
  QMixAndMatchLineGroups,
  QCdsPostalAddressHistoryV2,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QWarrantyTransactionSalesId,
  QDirParametersId,
  QPriceTermJournalTransId,
  QSalesAutomaticSalesDocumentHeaderChargeId,
  QGupParametersId,
  QBusinessDocumentDocumentParametersId,
  QSalesAutomaticSalesDocumentHeaderChargesId,
  QCdsPostalAddressHistoryId,
  QPartyLocationPrivateRolesId,
  QReturnFormatErrorCodesId,
  QCustomerParametersId,
  QSalesInvoiceQrCodeId,
  QSubBillMassTerminationScheduleHeaderAndLinesId,
  QDeliveryModeId,
  QBusinessDocumentElectronicInvoiceFrameworkTableEntityId,
  QSalesAgreementSalesTransId,
  QMixAndMatchLineGroupsId,
  QCdsPostalAddressHistoryV2Id,
  qWarrantyTransactionSales,
  qDirParameters,
  qPriceTermJournalTrans,
  qSalesAutomaticSalesDocumentHeaderCharge,
  qGupParameters,
  qBusinessDocumentDocumentParameters,
  qSalesAutomaticSalesDocumentHeaderCharges,
  qCdsPostalAddressHistory,
  qPartyLocationPrivateRoles,
  qReturnFormatErrorCodes,
  qCustomerParameters,
  qSalesInvoiceQrCode,
  qSubBillMassTerminationScheduleHeaderAndLines,
  qDeliveryMode,
  qBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  qSalesAgreementSalesTrans,
  qMixAndMatchLineGroups,
  qCdsPostalAddressHistoryV2,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public warrantyTransactionSales(): WarrantyTransactionSalesCollectionService<ClientType>;
  public warrantyTransactionSales(
    id: WarrantyTransactionSalesId,
  ): WarrantyTransactionSalesService<ClientType>;
  public warrantyTransactionSales(id?: WarrantyTransactionSalesId | undefined) {
    const fieldName = "WarrantyTransactionSales";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WarrantyTransactionSalesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WarrantyTransactionSalesService(
          client,
          path,
          new QWarrantyTransactionSalesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public dirParameters(): DirParametersCollectionService<ClientType>;
  public dirParameters(id: DirParametersId): DirParametersService<ClientType>;
  public dirParameters(id?: DirParametersId | undefined) {
    const fieldName = "DirParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DirParametersCollectionService(client, path, fieldName, options)
      : new DirParametersService(
          client,
          path,
          new QDirParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public priceTermJournalTrans(): PriceTermJournalTransCollectionService<ClientType>;
  public priceTermJournalTrans(
    id: PriceTermJournalTransId,
  ): PriceTermJournalTransService<ClientType>;
  public priceTermJournalTrans(id?: PriceTermJournalTransId | undefined) {
    const fieldName = "PriceTermJournalTrans";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PriceTermJournalTransCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PriceTermJournalTransService(
          client,
          path,
          new QPriceTermJournalTransId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public salesAutomaticSalesDocumentHeaderCharges(): SalesAutomaticSalesDocumentHeaderChargeCollectionService<ClientType>;
  public salesAutomaticSalesDocumentHeaderCharges(
    id: SalesAutomaticSalesDocumentHeaderChargeId,
  ): SalesAutomaticSalesDocumentHeaderChargeService<ClientType>;
  public salesAutomaticSalesDocumentHeaderCharges(
    id?: SalesAutomaticSalesDocumentHeaderChargeId | undefined,
  ) {
    const fieldName = "SalesAutomaticSalesDocumentHeaderCharges";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SalesAutomaticSalesDocumentHeaderChargeCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new SalesAutomaticSalesDocumentHeaderChargeService(
          client,
          path,
          new QSalesAutomaticSalesDocumentHeaderChargeId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public gupParameters(): GupParametersCollectionService<ClientType>;
  public gupParameters(id: GupParametersId): GupParametersService<ClientType>;
  public gupParameters(id?: GupParametersId | undefined) {
    const fieldName = "GUPParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new GupParametersCollectionService(client, path, fieldName, options)
      : new GupParametersService(
          client,
          path,
          new QGupParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public businessDocumentDocumentParameters(): BusinessDocumentDocumentParametersCollectionService<ClientType>;
  public businessDocumentDocumentParameters(
    id: BusinessDocumentDocumentParametersId,
  ): BusinessDocumentDocumentParametersService<ClientType>;
  public businessDocumentDocumentParameters(
    id?: BusinessDocumentDocumentParametersId | undefined,
  ) {
    const fieldName = "BusinessDocumentDocumentParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new BusinessDocumentDocumentParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new BusinessDocumentDocumentParametersService(
          client,
          path,
          new QBusinessDocumentDocumentParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public salesAutomaticSalesDocumentHeaderCharge(): SalesAutomaticSalesDocumentHeaderChargesCollectionService<ClientType>;
  public salesAutomaticSalesDocumentHeaderCharge(
    id: SalesAutomaticSalesDocumentHeaderChargesId,
  ): SalesAutomaticSalesDocumentHeaderChargesService<ClientType>;
  public salesAutomaticSalesDocumentHeaderCharge(
    id?: SalesAutomaticSalesDocumentHeaderChargesId | undefined,
  ) {
    const fieldName = "SalesAutomaticSalesDocumentHeaderCharge";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SalesAutomaticSalesDocumentHeaderChargesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new SalesAutomaticSalesDocumentHeaderChargesService(
          client,
          path,
          new QSalesAutomaticSalesDocumentHeaderChargesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public cdsPostalAddressHistory(): CdsPostalAddressHistoryCollectionService<ClientType>;
  public cdsPostalAddressHistory(
    id: CdsPostalAddressHistoryId,
  ): CdsPostalAddressHistoryService<ClientType>;
  public cdsPostalAddressHistory(id?: CdsPostalAddressHistoryId | undefined) {
    const fieldName = "CDSPostalAddressHistory";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CdsPostalAddressHistoryCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new CdsPostalAddressHistoryService(
          client,
          path,
          new QCdsPostalAddressHistoryId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public partyLocationPrivateRoles(): PartyLocationPrivateRolesCollectionService<ClientType>;
  public partyLocationPrivateRoles(
    id: PartyLocationPrivateRolesId,
  ): PartyLocationPrivateRolesService<ClientType>;
  public partyLocationPrivateRoles(
    id?: PartyLocationPrivateRolesId | undefined,
  ) {
    const fieldName = "PartyLocationPrivateRoles";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyLocationPrivateRolesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PartyLocationPrivateRolesService(
          client,
          path,
          new QPartyLocationPrivateRolesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public returnFormatErrorCodes(): ReturnFormatErrorCodesCollectionService<ClientType>;
  public returnFormatErrorCodes(
    id: ReturnFormatErrorCodesId,
  ): ReturnFormatErrorCodesService<ClientType>;
  public returnFormatErrorCodes(id?: ReturnFormatErrorCodesId | undefined) {
    const fieldName = "ReturnFormatErrorCodes";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ReturnFormatErrorCodesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ReturnFormatErrorCodesService(
          client,
          path,
          new QReturnFormatErrorCodesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public customerParameters(): CustomerParametersCollectionService<ClientType>;
  public customerParameters(
    id: CustomerParametersId,
  ): CustomerParametersService<ClientType>;
  public customerParameters(id?: CustomerParametersId | undefined) {
    const fieldName = "CustomerParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomerParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new CustomerParametersService(
          client,
          path,
          new QCustomerParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public salesInvoiceQrCode(): SalesInvoiceQrCodeCollectionService<ClientType>;
  public salesInvoiceQrCode(
    id: SalesInvoiceQrCodeId,
  ): SalesInvoiceQrCodeService<ClientType>;
  public salesInvoiceQrCode(id?: SalesInvoiceQrCodeId | undefined) {
    const fieldName = "SalesInvoiceQRCode";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SalesInvoiceQrCodeCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new SalesInvoiceQrCodeService(
          client,
          path,
          new QSalesInvoiceQrCodeId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public subBillMassTerminationScheduleHeaderAndLines(): SubBillMassTerminationScheduleHeaderAndLinesCollectionService<ClientType>;
  public subBillMassTerminationScheduleHeaderAndLines(
    id: SubBillMassTerminationScheduleHeaderAndLinesId,
  ): SubBillMassTerminationScheduleHeaderAndLinesService<ClientType>;
  public subBillMassTerminationScheduleHeaderAndLines(
    id?: SubBillMassTerminationScheduleHeaderAndLinesId | undefined,
  ) {
    const fieldName = "SubBillMassTerminationScheduleHeaderAndLines";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SubBillMassTerminationScheduleHeaderAndLinesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new SubBillMassTerminationScheduleHeaderAndLinesService(
          client,
          path,
          new QSubBillMassTerminationScheduleHeaderAndLinesId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public deliveryMode(): DeliveryModeCollectionService<ClientType>;
  public deliveryMode(id: DeliveryModeId): DeliveryModeService<ClientType>;
  public deliveryMode(id?: DeliveryModeId | undefined) {
    const fieldName = "DeliveryMode";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DeliveryModeCollectionService(client, path, fieldName, options)
      : new DeliveryModeService(
          client,
          path,
          new QDeliveryModeId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public businessDocumentElectronicInvoiceFrameworkTableEntity(): BusinessDocumentElectronicInvoiceFrameworkTableEntityCollectionService<ClientType>;
  public businessDocumentElectronicInvoiceFrameworkTableEntity(
    id: BusinessDocumentElectronicInvoiceFrameworkTableEntityId,
  ): BusinessDocumentElectronicInvoiceFrameworkTableEntityService<ClientType>;
  public businessDocumentElectronicInvoiceFrameworkTableEntity(
    id?: BusinessDocumentElectronicInvoiceFrameworkTableEntityId | undefined,
  ) {
    const fieldName = "BusinessDocumentElectronicInvoiceFrameworkTableEntity";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new BusinessDocumentElectronicInvoiceFrameworkTableEntityCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new BusinessDocumentElectronicInvoiceFrameworkTableEntityService(
          client,
          path,
          new QBusinessDocumentElectronicInvoiceFrameworkTableEntityId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public salesAgreementSalesTrans(): SalesAgreementSalesTransCollectionService<ClientType>;
  public salesAgreementSalesTrans(
    id: SalesAgreementSalesTransId,
  ): SalesAgreementSalesTransService<ClientType>;
  public salesAgreementSalesTrans(id?: SalesAgreementSalesTransId | undefined) {
    const fieldName = "SalesAgreementSalesTrans";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SalesAgreementSalesTransCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new SalesAgreementSalesTransService(
          client,
          path,
          new QSalesAgreementSalesTransId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public mixAndMatchLineGroups(): MixAndMatchLineGroupsCollectionService<ClientType>;
  public mixAndMatchLineGroups(
    id: MixAndMatchLineGroupsId,
  ): MixAndMatchLineGroupsService<ClientType>;
  public mixAndMatchLineGroups(id?: MixAndMatchLineGroupsId | undefined) {
    const fieldName = "MixAndMatchLineGroups";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MixAndMatchLineGroupsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new MixAndMatchLineGroupsService(
          client,
          path,
          new QMixAndMatchLineGroupsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public cdsPostalAddressHistoryV2(): CdsPostalAddressHistoryV2CollectionService<ClientType>;
  public cdsPostalAddressHistoryV2(
    id: CdsPostalAddressHistoryV2Id,
  ): CdsPostalAddressHistoryV2Service<ClientType>;
  public cdsPostalAddressHistoryV2(
    id?: CdsPostalAddressHistoryV2Id | undefined,
  ) {
    const fieldName = "CDSPostalAddressHistoryV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CdsPostalAddressHistoryV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new CdsPostalAddressHistoryV2Service(
          client,
          path,
          new QCdsPostalAddressHistoryV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }
}

export class WarrantyTransactionSalesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WarrantyTransactionSales,
  EditableWarrantyTransactionSales,
  QWarrantyTransactionSales
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWarrantyTransactionSales, options);
  }
}

export class WarrantyTransactionSalesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WarrantyTransactionSales,
  EditableWarrantyTransactionSales,
  QWarrantyTransactionSales,
  WarrantyTransactionSalesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWarrantyTransactionSales,
      new QWarrantyTransactionSalesId(name),
      options,
    );
  }
}

export class DirParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  DirParameters,
  EditableDirParameters,
  QDirParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qDirParameters, options);
  }
}

export class DirParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  DirParameters,
  EditableDirParameters,
  QDirParameters,
  DirParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qDirParameters,
      new QDirParametersId(name),
      options,
    );
  }
}

export class PriceTermJournalTransService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PriceTermJournalTrans,
  EditablePriceTermJournalTrans,
  QPriceTermJournalTrans
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPriceTermJournalTrans, options);
  }
}

export class PriceTermJournalTransCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PriceTermJournalTrans,
  EditablePriceTermJournalTrans,
  QPriceTermJournalTrans,
  PriceTermJournalTransId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPriceTermJournalTrans,
      new QPriceTermJournalTransId(name),
      options,
    );
  }
}

export class SalesAutomaticSalesDocumentHeaderChargeService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SalesAutomaticSalesDocumentHeaderCharge,
  EditableSalesAutomaticSalesDocumentHeaderCharge,
  QSalesAutomaticSalesDocumentHeaderCharge
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSalesAutomaticSalesDocumentHeaderCharge,
      options,
    );
  }
}

export class SalesAutomaticSalesDocumentHeaderChargeCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SalesAutomaticSalesDocumentHeaderCharge,
  EditableSalesAutomaticSalesDocumentHeaderCharge,
  QSalesAutomaticSalesDocumentHeaderCharge,
  SalesAutomaticSalesDocumentHeaderChargeId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSalesAutomaticSalesDocumentHeaderCharge,
      new QSalesAutomaticSalesDocumentHeaderChargeId(name),
      options,
    );
  }
}

export class GupParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  GupParameters,
  EditableGupParameters,
  QGupParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qGupParameters, options);
  }
}

export class GupParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  GupParameters,
  EditableGupParameters,
  QGupParameters,
  GupParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qGupParameters,
      new QGupParametersId(name),
      options,
    );
  }
}

export class BusinessDocumentDocumentParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  BusinessDocumentDocumentParameters,
  EditableBusinessDocumentDocumentParameters,
  QBusinessDocumentDocumentParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qBusinessDocumentDocumentParameters, options);
  }
}

export class BusinessDocumentDocumentParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  BusinessDocumentDocumentParameters,
  EditableBusinessDocumentDocumentParameters,
  QBusinessDocumentDocumentParameters,
  BusinessDocumentDocumentParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qBusinessDocumentDocumentParameters,
      new QBusinessDocumentDocumentParametersId(name),
      options,
    );
  }
}

export class SalesAutomaticSalesDocumentHeaderChargesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SalesAutomaticSalesDocumentHeaderCharges,
  EditableSalesAutomaticSalesDocumentHeaderCharges,
  QSalesAutomaticSalesDocumentHeaderCharges
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSalesAutomaticSalesDocumentHeaderCharges,
      options,
    );
  }
}

export class SalesAutomaticSalesDocumentHeaderChargesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SalesAutomaticSalesDocumentHeaderCharges,
  EditableSalesAutomaticSalesDocumentHeaderCharges,
  QSalesAutomaticSalesDocumentHeaderCharges,
  SalesAutomaticSalesDocumentHeaderChargesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSalesAutomaticSalesDocumentHeaderCharges,
      new QSalesAutomaticSalesDocumentHeaderChargesId(name),
      options,
    );
  }
}

export class CdsPostalAddressHistoryService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  CdsPostalAddressHistory,
  EditableCdsPostalAddressHistory,
  QCdsPostalAddressHistory
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qCdsPostalAddressHistory, options);
  }
}

export class CdsPostalAddressHistoryCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  CdsPostalAddressHistory,
  EditableCdsPostalAddressHistory,
  QCdsPostalAddressHistory,
  CdsPostalAddressHistoryId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qCdsPostalAddressHistory,
      new QCdsPostalAddressHistoryId(name),
      options,
    );
  }
}

export class PartyLocationPrivateRolesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PartyLocationPrivateRoles,
  EditablePartyLocationPrivateRoles,
  QPartyLocationPrivateRoles
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPartyLocationPrivateRoles, options);
  }
}

export class PartyLocationPrivateRolesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PartyLocationPrivateRoles,
  EditablePartyLocationPrivateRoles,
  QPartyLocationPrivateRoles,
  PartyLocationPrivateRolesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPartyLocationPrivateRoles,
      new QPartyLocationPrivateRolesId(name),
      options,
    );
  }
}

export class ReturnFormatErrorCodesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ReturnFormatErrorCodes,
  EditableReturnFormatErrorCodes,
  QReturnFormatErrorCodes
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qReturnFormatErrorCodes, options);
  }
}

export class ReturnFormatErrorCodesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ReturnFormatErrorCodes,
  EditableReturnFormatErrorCodes,
  QReturnFormatErrorCodes,
  ReturnFormatErrorCodesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qReturnFormatErrorCodes,
      new QReturnFormatErrorCodesId(name),
      options,
    );
  }
}

export class CustomerParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  CustomerParameters,
  EditableCustomerParameters,
  QCustomerParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qCustomerParameters, options);
  }
}

export class CustomerParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  CustomerParameters,
  EditableCustomerParameters,
  QCustomerParameters,
  CustomerParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qCustomerParameters,
      new QCustomerParametersId(name),
      options,
    );
  }
}

export class SalesInvoiceQrCodeService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SalesInvoiceQrCode,
  EditableSalesInvoiceQrCode,
  QSalesInvoiceQrCode
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qSalesInvoiceQrCode, options);
  }
}

export class SalesInvoiceQrCodeCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SalesInvoiceQrCode,
  EditableSalesInvoiceQrCode,
  QSalesInvoiceQrCode,
  SalesInvoiceQrCodeId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSalesInvoiceQrCode,
      new QSalesInvoiceQrCodeId(name),
      options,
    );
  }
}

export class SubBillMassTerminationScheduleHeaderAndLinesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SubBillMassTerminationScheduleHeaderAndLines,
  EditableSubBillMassTerminationScheduleHeaderAndLines,
  QSubBillMassTerminationScheduleHeaderAndLines
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSubBillMassTerminationScheduleHeaderAndLines,
      options,
    );
  }
}

export class SubBillMassTerminationScheduleHeaderAndLinesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SubBillMassTerminationScheduleHeaderAndLines,
  EditableSubBillMassTerminationScheduleHeaderAndLines,
  QSubBillMassTerminationScheduleHeaderAndLines,
  SubBillMassTerminationScheduleHeaderAndLinesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSubBillMassTerminationScheduleHeaderAndLines,
      new QSubBillMassTerminationScheduleHeaderAndLinesId(name),
      options,
    );
  }
}

export class DeliveryModeService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  DeliveryMode,
  EditableDeliveryMode,
  QDeliveryMode
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qDeliveryMode, options);
  }
}

export class DeliveryModeCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  DeliveryMode,
  EditableDeliveryMode,
  QDeliveryMode,
  DeliveryModeId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qDeliveryMode,
      new QDeliveryModeId(name),
      options,
    );
  }
}

export class BusinessDocumentElectronicInvoiceFrameworkTableEntityService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  BusinessDocumentElectronicInvoiceFrameworkTableEntity,
  EditableBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  QBusinessDocumentElectronicInvoiceFrameworkTableEntity
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qBusinessDocumentElectronicInvoiceFrameworkTableEntity,
      options,
    );
  }
}

export class BusinessDocumentElectronicInvoiceFrameworkTableEntityCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  BusinessDocumentElectronicInvoiceFrameworkTableEntity,
  EditableBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  QBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  BusinessDocumentElectronicInvoiceFrameworkTableEntityId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qBusinessDocumentElectronicInvoiceFrameworkTableEntity,
      new QBusinessDocumentElectronicInvoiceFrameworkTableEntityId(name),
      options,
    );
  }
}

export class SalesAgreementSalesTransService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SalesAgreementSalesTrans,
  EditableSalesAgreementSalesTrans,
  QSalesAgreementSalesTrans
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qSalesAgreementSalesTrans, options);
  }
}

export class SalesAgreementSalesTransCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SalesAgreementSalesTrans,
  EditableSalesAgreementSalesTrans,
  QSalesAgreementSalesTrans,
  SalesAgreementSalesTransId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qSalesAgreementSalesTrans,
      new QSalesAgreementSalesTransId(name),
      options,
    );
  }
}

export class MixAndMatchLineGroupsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  MixAndMatchLineGroups,
  EditableMixAndMatchLineGroups,
  QMixAndMatchLineGroups
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qMixAndMatchLineGroups, options);
  }
}

export class MixAndMatchLineGroupsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  MixAndMatchLineGroups,
  EditableMixAndMatchLineGroups,
  QMixAndMatchLineGroups,
  MixAndMatchLineGroupsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qMixAndMatchLineGroups,
      new QMixAndMatchLineGroupsId(name),
      options,
    );
  }
}

export class CdsPostalAddressHistoryV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  CdsPostalAddressHistoryV2,
  EditableCdsPostalAddressHistoryV2,
  QCdsPostalAddressHistoryV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qCdsPostalAddressHistoryV2, options);
  }
}

export class CdsPostalAddressHistoryV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  CdsPostalAddressHistoryV2,
  EditableCdsPostalAddressHistoryV2,
  QCdsPostalAddressHistoryV2,
  CdsPostalAddressHistoryV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qCdsPostalAddressHistoryV2,
      new QCdsPostalAddressHistoryV2Id(name),
      options,
    );
  }
}
