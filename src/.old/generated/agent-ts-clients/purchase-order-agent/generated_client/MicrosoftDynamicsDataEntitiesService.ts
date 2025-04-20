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
  VendorReasonsId,
  VendDefaultDocumentClassV2Id,
  VendCorrectionNotesId,
  PurchaseOrderLineV2ExistAddrReadOnlyId,
  VendPaymModeBankAccounts,
  EditableVendPaymModeBankAccounts,
  VendDependents,
  EditableVendDependents,
  VendPriceAdmTrans,
  EditableVendPriceAdmTrans,
  VendorReasons,
  EditableVendorReasons,
  VendDefaultDocumentClassV2,
  EditableVendDefaultDocumentClassV2,
  VendCorrectionNotes,
  EditableVendCorrectionNotes,
  PurchaseOrderLineV2ExistAddrReadOnly,
  EditablePurchaseOrderLineV2ExistAddrReadOnly,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QVendPaymModeBankAccounts,
  QVendDependents,
  QVendPriceAdmTrans,
  QVendorReasons,
  QVendDefaultDocumentClassV2,
  QVendCorrectionNotes,
  QPurchaseOrderLineV2ExistAddrReadOnly,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QVendPaymModeBankAccountsId,
  QVendDependentsId,
  QVendPriceAdmTransId,
  QVendorReasonsId,
  QVendDefaultDocumentClassV2Id,
  QVendCorrectionNotesId,
  QPurchaseOrderLineV2ExistAddrReadOnlyId,
  qVendPaymModeBankAccounts,
  qVendDependents,
  qVendPriceAdmTrans,
  qVendorReasons,
  qVendDefaultDocumentClassV2,
  qVendCorrectionNotes,
  qPurchaseOrderLineV2ExistAddrReadOnly,
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
