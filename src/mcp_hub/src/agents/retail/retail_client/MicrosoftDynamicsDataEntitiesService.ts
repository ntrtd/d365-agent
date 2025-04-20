// @ts-nocheck
import type { ODataCollectionResponseV4 } from "@odata2ts/odata-core";
import type {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  RetailEcoResCategoryId,
  RetailStoreTenderTypeTableId,
  RetailEcoResProductId,
  RetailGiftCardTransactionsId,
  RetailRecoListElementsId,
  LoyaltyCardRewardPointNonTransactionalActivityV2EntityId,
  RetailLoyaltyCardRewardPointTransactionV2Id,
  RetailEcoResProductTranslationId,
  MediaId,
  RetailInventItemBarcodeId,
  RetailEcoResCategoryTranslationId,
  RetailEcoResCategoryHierarchyRoleId,
  RetailMediaResourcesId,
  RetailEcoResCategoryHierarchyId,
  RetailInventTableId,
  RetailPackageLinesId,
  RetailImagesId,
  MixAndMatchLineGroupsId,
  CardTypesId,
  RetailEcoResCategory,
  EditableRetailEcoResCategory,
  RetailStoreTenderTypeTable,
  EditableRetailStoreTenderTypeTable,
  RetailEcoResProduct,
  EditableRetailEcoResProduct,
  RetailGiftCardTransactions,
  EditableRetailGiftCardTransactions,
  RetailRecoListElements,
  EditableRetailRecoListElements,
  LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  EditableLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  RetailLoyaltyCardRewardPointTransactionV2,
  EditableRetailLoyaltyCardRewardPointTransactionV2,
  RetailEcoResProductTranslation,
  EditableRetailEcoResProductTranslation,
  Media,
  EditableMedia,
  RetailInventItemBarcode,
  EditableRetailInventItemBarcode,
  RetailEcoResCategoryTranslation,
  EditableRetailEcoResCategoryTranslation,
  RetailEcoResCategoryHierarchyRole,
  EditableRetailEcoResCategoryHierarchyRole,
  RetailMediaResources,
  EditableRetailMediaResources,
  RetailEcoResCategoryHierarchy,
  EditableRetailEcoResCategoryHierarchy,
  RetailInventTable,
  EditableRetailInventTable,
  RetailPackageLines,
  EditableRetailPackageLines,
  RetailImages,
  EditableRetailImages,
  MixAndMatchLineGroups,
  EditableMixAndMatchLineGroups,
  CardTypes,
  EditableCardTypes,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QRetailEcoResCategory,
  QRetailStoreTenderTypeTable,
  QRetailEcoResProduct,
  QRetailGiftCardTransactions,
  QRetailRecoListElements,
  QLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  QRetailLoyaltyCardRewardPointTransactionV2,
  QRetailEcoResProductTranslation,
  QMedia,
  QRetailInventItemBarcode,
  QRetailEcoResCategoryTranslation,
  QRetailEcoResCategoryHierarchyRole,
  QRetailMediaResources,
  QRetailEcoResCategoryHierarchy,
  QRetailInventTable,
  QRetailPackageLines,
  QRetailImages,
  QMixAndMatchLineGroups,
  QCardTypes,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QRetailEcoResCategoryId,
  QRetailStoreTenderTypeTableId,
  QRetailEcoResProductId,
  QRetailGiftCardTransactionsId,
  QRetailRecoListElementsId,
  QLoyaltyCardRewardPointNonTransactionalActivityV2EntityId,
  QRetailLoyaltyCardRewardPointTransactionV2Id,
  QRetailEcoResProductTranslationId,
  QMediaId,
  QRetailInventItemBarcodeId,
  QRetailEcoResCategoryTranslationId,
  QRetailEcoResCategoryHierarchyRoleId,
  QRetailMediaResourcesId,
  QRetailEcoResCategoryHierarchyId,
  QRetailInventTableId,
  QRetailPackageLinesId,
  QRetailImagesId,
  QMixAndMatchLineGroupsId,
  QCardTypesId,
  qRetailEcoResCategory,
  qRetailStoreTenderTypeTable,
  RetailStoreTenderTypeTable_QQueryDistictTenderTypeIdAndName,
  qRetailEcoResProduct,
  qRetailGiftCardTransactions,
  qRetailRecoListElements,
  qLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  qRetailLoyaltyCardRewardPointTransactionV2,
  qRetailEcoResProductTranslation,
  qMedia,
  qRetailInventItemBarcode,
  qRetailEcoResCategoryTranslation,
  qRetailEcoResCategoryHierarchyRole,
  qRetailMediaResources,
  qRetailEcoResCategoryHierarchy,
  qRetailInventTable,
  qRetailPackageLines,
  qRetailImages,
  qMixAndMatchLineGroups,
  qCardTypes,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public retailEcoResCategory(): RetailEcoResCategoryCollectionService<ClientType>;
  public retailEcoResCategory(
    id: RetailEcoResCategoryId,
  ): RetailEcoResCategoryService<ClientType>;
  public retailEcoResCategory(id?: RetailEcoResCategoryId | undefined) {
    const fieldName = "RetailEcoResCategory";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailEcoResCategoryCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailEcoResCategoryService(
          client,
          path,
          new QRetailEcoResCategoryId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailStoreTenderTypeTable(): RetailStoreTenderTypeTableCollectionService<ClientType>;
  public retailStoreTenderTypeTable(
    id: RetailStoreTenderTypeTableId,
  ): RetailStoreTenderTypeTableService<ClientType>;
  public retailStoreTenderTypeTable(
    id?: RetailStoreTenderTypeTableId | undefined,
  ) {
    const fieldName = "RetailStoreTenderTypeTable";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailStoreTenderTypeTableCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailStoreTenderTypeTableService(
          client,
          path,
          new QRetailStoreTenderTypeTableId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailEcoResProduct(): RetailEcoResProductCollectionService<ClientType>;
  public retailEcoResProduct(
    id: RetailEcoResProductId,
  ): RetailEcoResProductService<ClientType>;
  public retailEcoResProduct(id?: RetailEcoResProductId | undefined) {
    const fieldName = "RetailEcoResProduct";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailEcoResProductCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailEcoResProductService(
          client,
          path,
          new QRetailEcoResProductId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public retailGiftCardTransactions(): RetailGiftCardTransactionsCollectionService<ClientType>;
  public retailGiftCardTransactions(
    id: RetailGiftCardTransactionsId,
  ): RetailGiftCardTransactionsService<ClientType>;
  public retailGiftCardTransactions(
    id?: RetailGiftCardTransactionsId | undefined,
  ) {
    const fieldName = "RetailGiftCardTransactions";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailGiftCardTransactionsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailGiftCardTransactionsService(
          client,
          path,
          new QRetailGiftCardTransactionsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailRecoListElements(): RetailRecoListElementsCollectionService<ClientType>;
  public retailRecoListElements(
    id: RetailRecoListElementsId,
  ): RetailRecoListElementsService<ClientType>;
  public retailRecoListElements(id?: RetailRecoListElementsId | undefined) {
    const fieldName = "RetailRecoListElements";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailRecoListElementsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailRecoListElementsService(
          client,
          path,
          new QRetailRecoListElementsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public loyaltyCardRewardPointNonTransactionalActivityV2Entity(): LoyaltyCardRewardPointNonTransactionalActivityV2EntityCollectionService<ClientType>;
  public loyaltyCardRewardPointNonTransactionalActivityV2Entity(
    id: LoyaltyCardRewardPointNonTransactionalActivityV2EntityId,
  ): LoyaltyCardRewardPointNonTransactionalActivityV2EntityService<ClientType>;
  public loyaltyCardRewardPointNonTransactionalActivityV2Entity(
    id?: LoyaltyCardRewardPointNonTransactionalActivityV2EntityId | undefined,
  ) {
    const fieldName = "LoyaltyCardRewardPointNonTransactionalActivityV2Entity";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LoyaltyCardRewardPointNonTransactionalActivityV2EntityCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new LoyaltyCardRewardPointNonTransactionalActivityV2EntityService(
          client,
          path,
          new QLoyaltyCardRewardPointNonTransactionalActivityV2EntityId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public retailLoyaltyCardRewardPointTransactionV2(): RetailLoyaltyCardRewardPointTransactionV2CollectionService<ClientType>;
  public retailLoyaltyCardRewardPointTransactionV2(
    id: RetailLoyaltyCardRewardPointTransactionV2Id,
  ): RetailLoyaltyCardRewardPointTransactionV2Service<ClientType>;
  public retailLoyaltyCardRewardPointTransactionV2(
    id?: RetailLoyaltyCardRewardPointTransactionV2Id | undefined,
  ) {
    const fieldName = "RetailLoyaltyCardRewardPointTransactionV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailLoyaltyCardRewardPointTransactionV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailLoyaltyCardRewardPointTransactionV2Service(
          client,
          path,
          new QRetailLoyaltyCardRewardPointTransactionV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailEcoResProductTranslation(): RetailEcoResProductTranslationCollectionService<ClientType>;
  public retailEcoResProductTranslation(
    id: RetailEcoResProductTranslationId,
  ): RetailEcoResProductTranslationService<ClientType>;
  public retailEcoResProductTranslation(
    id?: RetailEcoResProductTranslationId | undefined,
  ) {
    const fieldName = "RetailEcoResProductTranslation";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailEcoResProductTranslationCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailEcoResProductTranslationService(
          client,
          path,
          new QRetailEcoResProductTranslationId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public media(): MediaCollectionService<ClientType>;
  public media(id: MediaId): MediaService<ClientType>;
  public media(id?: MediaId | undefined) {
    const fieldName = "Media";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MediaCollectionService(client, path, fieldName, options)
      : new MediaService(
          client,
          path,
          new QMediaId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public retailInventItemBarcode(): RetailInventItemBarcodeCollectionService<ClientType>;
  public retailInventItemBarcode(
    id: RetailInventItemBarcodeId,
  ): RetailInventItemBarcodeService<ClientType>;
  public retailInventItemBarcode(id?: RetailInventItemBarcodeId | undefined) {
    const fieldName = "RetailInventItemBarcode";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailInventItemBarcodeCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailInventItemBarcodeService(
          client,
          path,
          new QRetailInventItemBarcodeId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailEcoResCategoryTranslation(): RetailEcoResCategoryTranslationCollectionService<ClientType>;
  public retailEcoResCategoryTranslation(
    id: RetailEcoResCategoryTranslationId,
  ): RetailEcoResCategoryTranslationService<ClientType>;
  public retailEcoResCategoryTranslation(
    id?: RetailEcoResCategoryTranslationId | undefined,
  ) {
    const fieldName = "RetailEcoResCategoryTranslation";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailEcoResCategoryTranslationCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailEcoResCategoryTranslationService(
          client,
          path,
          new QRetailEcoResCategoryTranslationId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailEcoResCategoryHierarchyRole(): RetailEcoResCategoryHierarchyRoleCollectionService<ClientType>;
  public retailEcoResCategoryHierarchyRole(
    id: RetailEcoResCategoryHierarchyRoleId,
  ): RetailEcoResCategoryHierarchyRoleService<ClientType>;
  public retailEcoResCategoryHierarchyRole(
    id?: RetailEcoResCategoryHierarchyRoleId | undefined,
  ) {
    const fieldName = "RetailEcoResCategoryHierarchyRole";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailEcoResCategoryHierarchyRoleCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailEcoResCategoryHierarchyRoleService(
          client,
          path,
          new QRetailEcoResCategoryHierarchyRoleId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailMediaResources(): RetailMediaResourcesCollectionService<ClientType>;
  public retailMediaResources(
    id: RetailMediaResourcesId,
  ): RetailMediaResourcesService<ClientType>;
  public retailMediaResources(id?: RetailMediaResourcesId | undefined) {
    const fieldName = "RetailMediaResources";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailMediaResourcesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailMediaResourcesService(
          client,
          path,
          new QRetailMediaResourcesId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailEcoResCategoryHierarchy(): RetailEcoResCategoryHierarchyCollectionService<ClientType>;
  public retailEcoResCategoryHierarchy(
    id: RetailEcoResCategoryHierarchyId,
  ): RetailEcoResCategoryHierarchyService<ClientType>;
  public retailEcoResCategoryHierarchy(
    id?: RetailEcoResCategoryHierarchyId | undefined,
  ) {
    const fieldName = "RetailEcoResCategoryHierarchy";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailEcoResCategoryHierarchyCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailEcoResCategoryHierarchyService(
          client,
          path,
          new QRetailEcoResCategoryHierarchyId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public retailInventTable(): RetailInventTableCollectionService<ClientType>;
  public retailInventTable(
    id: RetailInventTableId,
  ): RetailInventTableService<ClientType>;
  public retailInventTable(id?: RetailInventTableId | undefined) {
    const fieldName = "RetailInventTable";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailInventTableCollectionService(client, path, fieldName, options)
      : new RetailInventTableService(
          client,
          path,
          new QRetailInventTableId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public retailPackageLines(): RetailPackageLinesCollectionService<ClientType>;
  public retailPackageLines(
    id: RetailPackageLinesId,
  ): RetailPackageLinesService<ClientType>;
  public retailPackageLines(id?: RetailPackageLinesId | undefined) {
    const fieldName = "RetailPackageLines";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailPackageLinesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new RetailPackageLinesService(
          client,
          path,
          new QRetailPackageLinesId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public retailImages(): RetailImagesCollectionService<ClientType>;
  public retailImages(id: RetailImagesId): RetailImagesService<ClientType>;
  public retailImages(id?: RetailImagesId | undefined) {
    const fieldName = "RetailImages";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RetailImagesCollectionService(client, path, fieldName, options)
      : new RetailImagesService(
          client,
          path,
          new QRetailImagesId(fieldName).buildUrl(id, isUrlNotEncoded()),
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

  public cardTypes(): CardTypesCollectionService<ClientType>;
  public cardTypes(id: CardTypesId): CardTypesService<ClientType>;
  public cardTypes(id?: CardTypesId | undefined) {
    const fieldName = "CardTypes";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CardTypesCollectionService(client, path, fieldName, options)
      : new CardTypesService(
          client,
          path,
          new QCardTypesId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }
}

export class RetailEcoResCategoryService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailEcoResCategory,
  EditableRetailEcoResCategory,
  QRetailEcoResCategory
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailEcoResCategory, options);
  }
}

export class RetailEcoResCategoryCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailEcoResCategory,
  EditableRetailEcoResCategory,
  QRetailEcoResCategory,
  RetailEcoResCategoryId
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
      qRetailEcoResCategory,
      new QRetailEcoResCategoryId(name),
      options,
    );
  }
}

export class RetailStoreTenderTypeTableService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailStoreTenderTypeTable,
  EditableRetailStoreTenderTypeTable,
  QRetailStoreTenderTypeTable
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailStoreTenderTypeTable, options);
  }
}

export class RetailStoreTenderTypeTableCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailStoreTenderTypeTable,
  EditableRetailStoreTenderTypeTable,
  QRetailStoreTenderTypeTable,
  RetailStoreTenderTypeTableId
> {
  private _retailStoreTenderTypeTableQQueryDistictTenderTypeIdAndName?: RetailStoreTenderTypeTable_QQueryDistictTenderTypeIdAndName;

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
      qRetailStoreTenderTypeTable,
      new QRetailStoreTenderTypeTableId(name),
      options,
    );
  }

  public async queryDistictTenderTypeIdAndName(
    requestConfig?: ODataHttpClientConfig<ClientType>,
  ): Promise<
    HttpResponseModel<ODataCollectionResponseV4<RetailStoreTenderTypeTable>>
  > {
    if (!this._retailStoreTenderTypeTableQQueryDistictTenderTypeIdAndName) {
      this._retailStoreTenderTypeTableQQueryDistictTenderTypeIdAndName =
        new RetailStoreTenderTypeTable_QQueryDistictTenderTypeIdAndName();
    }

    const { addFullPath, client, getDefaultHeaders, isUrlNotEncoded } =
      this.__base;
    const url = addFullPath(
      this._retailStoreTenderTypeTableQQueryDistictTenderTypeIdAndName.buildUrl(),
    );
    const response = await client.post(
      url,
      {},
      requestConfig,
      getDefaultHeaders(),
    );
    return this._retailStoreTenderTypeTableQQueryDistictTenderTypeIdAndName.convertResponse(
      response,
    );
  }
}

export class RetailEcoResProductService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailEcoResProduct,
  EditableRetailEcoResProduct,
  QRetailEcoResProduct
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailEcoResProduct, options);
  }
}

export class RetailEcoResProductCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailEcoResProduct,
  EditableRetailEcoResProduct,
  QRetailEcoResProduct,
  RetailEcoResProductId
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
      qRetailEcoResProduct,
      new QRetailEcoResProductId(name),
      options,
    );
  }
}

export class RetailGiftCardTransactionsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailGiftCardTransactions,
  EditableRetailGiftCardTransactions,
  QRetailGiftCardTransactions
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailGiftCardTransactions, options);
  }
}

export class RetailGiftCardTransactionsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailGiftCardTransactions,
  EditableRetailGiftCardTransactions,
  QRetailGiftCardTransactions,
  RetailGiftCardTransactionsId
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
      qRetailGiftCardTransactions,
      new QRetailGiftCardTransactionsId(name),
      options,
    );
  }
}

export class RetailRecoListElementsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailRecoListElements,
  EditableRetailRecoListElements,
  QRetailRecoListElements
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailRecoListElements, options);
  }
}

export class RetailRecoListElementsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailRecoListElements,
  EditableRetailRecoListElements,
  QRetailRecoListElements,
  RetailRecoListElementsId
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
      qRetailRecoListElements,
      new QRetailRecoListElementsId(name),
      options,
    );
  }
}

export class LoyaltyCardRewardPointNonTransactionalActivityV2EntityService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  EditableLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  QLoyaltyCardRewardPointNonTransactionalActivityV2Entity
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
      qLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
      options,
    );
  }
}

export class LoyaltyCardRewardPointNonTransactionalActivityV2EntityCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  EditableLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  QLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  LoyaltyCardRewardPointNonTransactionalActivityV2EntityId
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
      qLoyaltyCardRewardPointNonTransactionalActivityV2Entity,
      new QLoyaltyCardRewardPointNonTransactionalActivityV2EntityId(name),
      options,
    );
  }
}

export class RetailLoyaltyCardRewardPointTransactionV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailLoyaltyCardRewardPointTransactionV2,
  EditableRetailLoyaltyCardRewardPointTransactionV2,
  QRetailLoyaltyCardRewardPointTransactionV2
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
      qRetailLoyaltyCardRewardPointTransactionV2,
      options,
    );
  }
}

export class RetailLoyaltyCardRewardPointTransactionV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailLoyaltyCardRewardPointTransactionV2,
  EditableRetailLoyaltyCardRewardPointTransactionV2,
  QRetailLoyaltyCardRewardPointTransactionV2,
  RetailLoyaltyCardRewardPointTransactionV2Id
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
      qRetailLoyaltyCardRewardPointTransactionV2,
      new QRetailLoyaltyCardRewardPointTransactionV2Id(name),
      options,
    );
  }
}

export class RetailEcoResProductTranslationService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailEcoResProductTranslation,
  EditableRetailEcoResProductTranslation,
  QRetailEcoResProductTranslation
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailEcoResProductTranslation, options);
  }
}

export class RetailEcoResProductTranslationCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailEcoResProductTranslation,
  EditableRetailEcoResProductTranslation,
  QRetailEcoResProductTranslation,
  RetailEcoResProductTranslationId
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
      qRetailEcoResProductTranslation,
      new QRetailEcoResProductTranslationId(name),
      options,
    );
  }
}

export class MediaService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<ClientType, Media, EditableMedia, QMedia> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qMedia, options);
  }
}

export class MediaCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  Media,
  EditableMedia,
  QMedia,
  MediaId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qMedia, new QMediaId(name), options);
  }
}

export class RetailInventItemBarcodeService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailInventItemBarcode,
  EditableRetailInventItemBarcode,
  QRetailInventItemBarcode
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailInventItemBarcode, options);
  }
}

export class RetailInventItemBarcodeCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailInventItemBarcode,
  EditableRetailInventItemBarcode,
  QRetailInventItemBarcode,
  RetailInventItemBarcodeId
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
      qRetailInventItemBarcode,
      new QRetailInventItemBarcodeId(name),
      options,
    );
  }
}

export class RetailEcoResCategoryTranslationService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailEcoResCategoryTranslation,
  EditableRetailEcoResCategoryTranslation,
  QRetailEcoResCategoryTranslation
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailEcoResCategoryTranslation, options);
  }
}

export class RetailEcoResCategoryTranslationCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailEcoResCategoryTranslation,
  EditableRetailEcoResCategoryTranslation,
  QRetailEcoResCategoryTranslation,
  RetailEcoResCategoryTranslationId
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
      qRetailEcoResCategoryTranslation,
      new QRetailEcoResCategoryTranslationId(name),
      options,
    );
  }
}

export class RetailEcoResCategoryHierarchyRoleService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailEcoResCategoryHierarchyRole,
  EditableRetailEcoResCategoryHierarchyRole,
  QRetailEcoResCategoryHierarchyRole
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailEcoResCategoryHierarchyRole, options);
  }
}

export class RetailEcoResCategoryHierarchyRoleCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailEcoResCategoryHierarchyRole,
  EditableRetailEcoResCategoryHierarchyRole,
  QRetailEcoResCategoryHierarchyRole,
  RetailEcoResCategoryHierarchyRoleId
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
      qRetailEcoResCategoryHierarchyRole,
      new QRetailEcoResCategoryHierarchyRoleId(name),
      options,
    );
  }
}

export class RetailMediaResourcesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailMediaResources,
  EditableRetailMediaResources,
  QRetailMediaResources
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailMediaResources, options);
  }
}

export class RetailMediaResourcesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailMediaResources,
  EditableRetailMediaResources,
  QRetailMediaResources,
  RetailMediaResourcesId
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
      qRetailMediaResources,
      new QRetailMediaResourcesId(name),
      options,
    );
  }
}

export class RetailEcoResCategoryHierarchyService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailEcoResCategoryHierarchy,
  EditableRetailEcoResCategoryHierarchy,
  QRetailEcoResCategoryHierarchy
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailEcoResCategoryHierarchy, options);
  }
}

export class RetailEcoResCategoryHierarchyCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailEcoResCategoryHierarchy,
  EditableRetailEcoResCategoryHierarchy,
  QRetailEcoResCategoryHierarchy,
  RetailEcoResCategoryHierarchyId
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
      qRetailEcoResCategoryHierarchy,
      new QRetailEcoResCategoryHierarchyId(name),
      options,
    );
  }
}

export class RetailInventTableService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailInventTable,
  EditableRetailInventTable,
  QRetailInventTable
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailInventTable, options);
  }
}

export class RetailInventTableCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailInventTable,
  EditableRetailInventTable,
  QRetailInventTable,
  RetailInventTableId
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
      qRetailInventTable,
      new QRetailInventTableId(name),
      options,
    );
  }
}

export class RetailPackageLinesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailPackageLines,
  EditableRetailPackageLines,
  QRetailPackageLines
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailPackageLines, options);
  }
}

export class RetailPackageLinesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailPackageLines,
  EditableRetailPackageLines,
  QRetailPackageLines,
  RetailPackageLinesId
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
      qRetailPackageLines,
      new QRetailPackageLinesId(name),
      options,
    );
  }
}

export class RetailImagesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  RetailImages,
  EditableRetailImages,
  QRetailImages
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qRetailImages, options);
  }
}

export class RetailImagesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  RetailImages,
  EditableRetailImages,
  QRetailImages,
  RetailImagesId
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
      qRetailImages,
      new QRetailImagesId(name),
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

export class CardTypesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  CardTypes,
  EditableCardTypes,
  QCardTypes
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qCardTypes, options);
  }
}

export class CardTypesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  CardTypes,
  EditableCardTypes,
  QCardTypes,
  CardTypesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qCardTypes, new QCardTypesId(name), options);
  }
}
