// @ts-nocheck
import type { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  VendPaymModeBankAccountsId,
  VendDependentsId,
  VendPriceAdmTransId,
  ExternalLinksId,
  VendorReasonsId,
  VendDefaultDocumentClassV2Id,
  BusinessDocumentDocumentParametersId,
  VendCorrectionNotesId,
  ProspectiveVendorRegistrationContactPersonPostalAddressesId,
  PurchaseOrderLineV2ExistAddrReadOnlyId,
  PartyLocationPrivateRolesId,
  DeliveryModeId,
  BusinessDocumentElectronicInvoiceFrameworkTableEntityId,
  ExternalLinksGroupsId,
  VendPaymModeBankAccounts,
  EditableVendPaymModeBankAccounts,
  VendDependents,
  EditableVendDependents,
  VendPriceAdmTrans,
  EditableVendPriceAdmTrans,
  ExternalLinks,
  EditableExternalLinks,
  VendorReasons,
  EditableVendorReasons,
  VendDefaultDocumentClassV2,
  EditableVendDefaultDocumentClassV2,
  BusinessDocumentDocumentParameters,
  EditableBusinessDocumentDocumentParameters,
  VendCorrectionNotes,
  EditableVendCorrectionNotes,
  ProspectiveVendorRegistrationContactPersonPostalAddresses,
  EditableProspectiveVendorRegistrationContactPersonPostalAddresses,
  PurchaseOrderLineV2ExistAddrReadOnly,
  EditablePurchaseOrderLineV2ExistAddrReadOnly,
  PartyLocationPrivateRoles,
  EditablePartyLocationPrivateRoles,
  DeliveryMode,
  EditableDeliveryMode,
  BusinessDocumentElectronicInvoiceFrameworkTableEntity,
  EditableBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  ExternalLinksGroups,
  EditableExternalLinksGroups,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QVendPaymModeBankAccounts,
  QVendDependents,
  QVendPriceAdmTrans,
  QExternalLinks,
  QVendorReasons,
  QVendDefaultDocumentClassV2,
  QBusinessDocumentDocumentParameters,
  QVendCorrectionNotes,
  QProspectiveVendorRegistrationContactPersonPostalAddresses,
  QPurchaseOrderLineV2ExistAddrReadOnly,
  QPartyLocationPrivateRoles,
  QDeliveryMode,
  QBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  QExternalLinksGroups,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QVendPaymModeBankAccountsId,
  QVendDependentsId,
  QVendPriceAdmTransId,
  QExternalLinksId,
  QVendorReasonsId,
  QVendDefaultDocumentClassV2Id,
  QBusinessDocumentDocumentParametersId,
  QVendCorrectionNotesId,
  QProspectiveVendorRegistrationContactPersonPostalAddressesId,
  QPurchaseOrderLineV2ExistAddrReadOnlyId,
  QPartyLocationPrivateRolesId,
  QDeliveryModeId,
  QBusinessDocumentElectronicInvoiceFrameworkTableEntityId,
  QExternalLinksGroupsId,
  qVendPaymModeBankAccounts,
  qVendDependents,
  qVendPriceAdmTrans,
  qExternalLinks,
  qVendorReasons,
  qVendDefaultDocumentClassV2,
  qBusinessDocumentDocumentParameters,
  qVendCorrectionNotes,
  qProspectiveVendorRegistrationContactPersonPostalAddresses,
  qPurchaseOrderLineV2ExistAddrReadOnly,
  qPartyLocationPrivateRoles,
  qDeliveryMode,
  qBusinessDocumentElectronicInvoiceFrameworkTableEntity,
  qExternalLinksGroups,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public vendPaymModeBankAccounts(): VendPaymModeBankAccountsCollectionService<ClientType>;
  public vendPaymModeBankAccounts(
    id: VendPaymModeBankAccountsId,
  ): VendPaymModeBankAccountsService<ClientType>;
  public vendPaymModeBankAccounts(id?: VendPaymModeBankAccountsId | undefined) {
    const fieldName = "VendPaymModeBankAccounts";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new VendPaymModeBankAccountsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new VendPaymModeBankAccountsService(
          client,
          path,
          new QVendPaymModeBankAccountsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public vendDependents(): VendDependentsCollectionService<ClientType>;
  public vendDependents(
    id: VendDependentsId,
  ): VendDependentsService<ClientType>;
  public vendDependents(id?: VendDependentsId | undefined) {
    const fieldName = "VendDependents";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new VendDependentsCollectionService(client, path, fieldName, options)
      : new VendDependentsService(
          client,
          path,
          new QVendDependentsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public vendPriceAdmTrans(): VendPriceAdmTransCollectionService<ClientType>;
  public vendPriceAdmTrans(
    id: VendPriceAdmTransId,
  ): VendPriceAdmTransService<ClientType>;
  public vendPriceAdmTrans(id?: VendPriceAdmTransId | undefined) {
    const fieldName = "VendPriceAdmTrans";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new VendPriceAdmTransCollectionService(client, path, fieldName, options)
      : new VendPriceAdmTransService(
          client,
          path,
          new QVendPriceAdmTransId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public externalLinks(): ExternalLinksCollectionService<ClientType>;
  public externalLinks(id: ExternalLinksId): ExternalLinksService<ClientType>;
  public externalLinks(id?: ExternalLinksId | undefined) {
    const fieldName = "ExternalLinks";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExternalLinksCollectionService(client, path, fieldName, options)
      : new ExternalLinksService(
          client,
          path,
          new QExternalLinksId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public vendorReasons(): VendorReasonsCollectionService<ClientType>;
  public vendorReasons(id: VendorReasonsId): VendorReasonsService<ClientType>;
  public vendorReasons(id?: VendorReasonsId | undefined) {
    const fieldName = "VendorReasons";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new VendorReasonsCollectionService(client, path, fieldName, options)
      : new VendorReasonsService(
          client,
          path,
          new QVendorReasonsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public vendDefaultDocumentClassV2(): VendDefaultDocumentClassV2CollectionService<ClientType>;
  public vendDefaultDocumentClassV2(
    id: VendDefaultDocumentClassV2Id,
  ): VendDefaultDocumentClassV2Service<ClientType>;
  public vendDefaultDocumentClassV2(
    id?: VendDefaultDocumentClassV2Id | undefined,
  ) {
    const fieldName = "VendDefaultDocumentClassV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new VendDefaultDocumentClassV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new VendDefaultDocumentClassV2Service(
          client,
          path,
          new QVendDefaultDocumentClassV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
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

  public vendCorrectionNotes(): VendCorrectionNotesCollectionService<ClientType>;
  public vendCorrectionNotes(
    id: VendCorrectionNotesId,
  ): VendCorrectionNotesService<ClientType>;
  public vendCorrectionNotes(id?: VendCorrectionNotesId | undefined) {
    const fieldName = "VendCorrectionNotes";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new VendCorrectionNotesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new VendCorrectionNotesService(
          client,
          path,
          new QVendCorrectionNotesId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public prospectiveVendorRegistrationContactPersonPostalAddresses(): ProspectiveVendorRegistrationContactPersonPostalAddressesCollectionService<ClientType>;
  public prospectiveVendorRegistrationContactPersonPostalAddresses(
    id: ProspectiveVendorRegistrationContactPersonPostalAddressesId,
  ): ProspectiveVendorRegistrationContactPersonPostalAddressesService<ClientType>;
  public prospectiveVendorRegistrationContactPersonPostalAddresses(
    id?:
      | ProspectiveVendorRegistrationContactPersonPostalAddressesId
      | undefined,
  ) {
    const fieldName =
      "ProspectiveVendorRegistrationContactPersonPostalAddresses";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProspectiveVendorRegistrationContactPersonPostalAddressesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProspectiveVendorRegistrationContactPersonPostalAddressesService(
          client,
          path,
          new QProspectiveVendorRegistrationContactPersonPostalAddressesId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public purchaseOrderLineV2ExistAddrReadOnly(): PurchaseOrderLineV2ExistAddrReadOnlyCollectionService<ClientType>;
  public purchaseOrderLineV2ExistAddrReadOnly(
    id: PurchaseOrderLineV2ExistAddrReadOnlyId,
  ): PurchaseOrderLineV2ExistAddrReadOnlyService<ClientType>;
  public purchaseOrderLineV2ExistAddrReadOnly(
    id?: PurchaseOrderLineV2ExistAddrReadOnlyId | undefined,
  ) {
    const fieldName = "PurchaseOrderLineV2ExistAddrReadOnly";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PurchaseOrderLineV2ExistAddrReadOnlyCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PurchaseOrderLineV2ExistAddrReadOnlyService(
          client,
          path,
          new QPurchaseOrderLineV2ExistAddrReadOnlyId(fieldName).buildUrl(
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

  public externalLinksGroups(): ExternalLinksGroupsCollectionService<ClientType>;
  public externalLinksGroups(
    id: ExternalLinksGroupsId,
  ): ExternalLinksGroupsService<ClientType>;
  public externalLinksGroups(id?: ExternalLinksGroupsId | undefined) {
    const fieldName = "ExternalLinksGroups";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExternalLinksGroupsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ExternalLinksGroupsService(
          client,
          path,
          new QExternalLinksGroupsId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }
}

export class VendPaymModeBankAccountsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  VendPaymModeBankAccounts,
  EditableVendPaymModeBankAccounts,
  QVendPaymModeBankAccounts
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qVendPaymModeBankAccounts, options);
  }
}

export class VendPaymModeBankAccountsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  VendPaymModeBankAccounts,
  EditableVendPaymModeBankAccounts,
  QVendPaymModeBankAccounts,
  VendPaymModeBankAccountsId
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
      qVendPaymModeBankAccounts,
      new QVendPaymModeBankAccountsId(name),
      options,
    );
  }
}

export class VendDependentsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  VendDependents,
  EditableVendDependents,
  QVendDependents
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qVendDependents, options);
  }
}

export class VendDependentsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  VendDependents,
  EditableVendDependents,
  QVendDependents,
  VendDependentsId
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
      qVendDependents,
      new QVendDependentsId(name),
      options,
    );
  }
}

export class VendPriceAdmTransService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  VendPriceAdmTrans,
  EditableVendPriceAdmTrans,
  QVendPriceAdmTrans
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qVendPriceAdmTrans, options);
  }
}

export class VendPriceAdmTransCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  VendPriceAdmTrans,
  EditableVendPriceAdmTrans,
  QVendPriceAdmTrans,
  VendPriceAdmTransId
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
      qVendPriceAdmTrans,
      new QVendPriceAdmTransId(name),
      options,
    );
  }
}

export class ExternalLinksService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ExternalLinks,
  EditableExternalLinks,
  QExternalLinks
> {
  private _externalLinksGroups?: ExternalLinksGroupsService<ClientType>;

  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qExternalLinks, options);
  }

  public externalLinksGroups(): ExternalLinksGroupsService<ClientType> {
    if (!this._externalLinksGroups) {
      const { client, path, options } = this.__base;
      this._externalLinksGroups = new ExternalLinksGroupsService(
        client,
        path,
        "ExternalLinksGroups",
        options,
      );
    }

    return this._externalLinksGroups;
  }
}

export class ExternalLinksCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ExternalLinks,
  EditableExternalLinks,
  QExternalLinks,
  ExternalLinksId
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
      qExternalLinks,
      new QExternalLinksId(name),
      options,
    );
  }
}

export class VendorReasonsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  VendorReasons,
  EditableVendorReasons,
  QVendorReasons
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qVendorReasons, options);
  }
}

export class VendorReasonsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  VendorReasons,
  EditableVendorReasons,
  QVendorReasons,
  VendorReasonsId
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
      qVendorReasons,
      new QVendorReasonsId(name),
      options,
    );
  }
}

export class VendDefaultDocumentClassV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  VendDefaultDocumentClassV2,
  EditableVendDefaultDocumentClassV2,
  QVendDefaultDocumentClassV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qVendDefaultDocumentClassV2, options);
  }
}

export class VendDefaultDocumentClassV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  VendDefaultDocumentClassV2,
  EditableVendDefaultDocumentClassV2,
  QVendDefaultDocumentClassV2,
  VendDefaultDocumentClassV2Id
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
      qVendDefaultDocumentClassV2,
      new QVendDefaultDocumentClassV2Id(name),
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

export class VendCorrectionNotesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  VendCorrectionNotes,
  EditableVendCorrectionNotes,
  QVendCorrectionNotes
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qVendCorrectionNotes, options);
  }
}

export class VendCorrectionNotesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  VendCorrectionNotes,
  EditableVendCorrectionNotes,
  QVendCorrectionNotes,
  VendCorrectionNotesId
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
      qVendCorrectionNotes,
      new QVendCorrectionNotesId(name),
      options,
    );
  }
}

export class ProspectiveVendorRegistrationContactPersonPostalAddressesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProspectiveVendorRegistrationContactPersonPostalAddresses,
  EditableProspectiveVendorRegistrationContactPersonPostalAddresses,
  QProspectiveVendorRegistrationContactPersonPostalAddresses
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
      qProspectiveVendorRegistrationContactPersonPostalAddresses,
      options,
    );
  }
}

export class ProspectiveVendorRegistrationContactPersonPostalAddressesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProspectiveVendorRegistrationContactPersonPostalAddresses,
  EditableProspectiveVendorRegistrationContactPersonPostalAddresses,
  QProspectiveVendorRegistrationContactPersonPostalAddresses,
  ProspectiveVendorRegistrationContactPersonPostalAddressesId
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
      qProspectiveVendorRegistrationContactPersonPostalAddresses,
      new QProspectiveVendorRegistrationContactPersonPostalAddressesId(name),
      options,
    );
  }
}

export class PurchaseOrderLineV2ExistAddrReadOnlyService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PurchaseOrderLineV2ExistAddrReadOnly,
  EditablePurchaseOrderLineV2ExistAddrReadOnly,
  QPurchaseOrderLineV2ExistAddrReadOnly
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
      qPurchaseOrderLineV2ExistAddrReadOnly,
      options,
    );
  }
}

export class PurchaseOrderLineV2ExistAddrReadOnlyCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PurchaseOrderLineV2ExistAddrReadOnly,
  EditablePurchaseOrderLineV2ExistAddrReadOnly,
  QPurchaseOrderLineV2ExistAddrReadOnly,
  PurchaseOrderLineV2ExistAddrReadOnlyId
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
      qPurchaseOrderLineV2ExistAddrReadOnly,
      new QPurchaseOrderLineV2ExistAddrReadOnlyId(name),
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

export class ExternalLinksGroupsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ExternalLinksGroups,
  EditableExternalLinksGroups,
  QExternalLinksGroups
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qExternalLinksGroups, options);
  }

  public externalLinks(): ExternalLinksCollectionService<ClientType>;
  public externalLinks(id: ExternalLinksId): ExternalLinksService<ClientType>;
  public externalLinks(id?: ExternalLinksId | undefined) {
    const fieldName = "ExternalLinks";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExternalLinksCollectionService(client, path, fieldName, options)
      : new ExternalLinksService(
          client,
          path,
          new QExternalLinksId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }
}

export class ExternalLinksGroupsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ExternalLinksGroups,
  EditableExternalLinksGroups,
  QExternalLinksGroups,
  ExternalLinksGroupsId
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
      qExternalLinksGroups,
      new QExternalLinksGroupsId(name),
      options,
    );
  }
}
