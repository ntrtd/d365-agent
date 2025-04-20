/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PbsItemizations } from './PbsItemizations';

/**
 * Request builder class for operations supported on the {@link PbsItemizations} entity.
 */
export class PbsItemizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PbsItemizations<T>, T> {
  /**
   * Returns a request builder for querying all `PbsItemizations` entities.
   * @returns A request builder for creating requests to retrieve all `PbsItemizations` entities.
   */
  getAll(): GetAllRequestBuilder<PbsItemizations<T>, T> {
    return new GetAllRequestBuilder<PbsItemizations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PbsItemizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PbsItemizations`.
   */
  create(
    entity: PbsItemizations<T>
  ): CreateRequestBuilder<PbsItemizations<T>, T> {
    return new CreateRequestBuilder<PbsItemizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PbsItemizations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PbsItemizations.dataAreaId}.
   * @param ccTransUniqueId Key property. See {@link PbsItemizations.ccTransUniqueId}.
   * @param subcategoryCode Key property. See {@link PbsItemizations.subcategoryCode}.
   * @param transactionDate Key property. See {@link PbsItemizations.transactionDate}.
   * @returns A request builder for creating requests to retrieve one `PbsItemizations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ccTransUniqueId: DeserializedType<T, 'Edm.String'>,
    subcategoryCode: DeserializedType<T, 'Edm.String'>,
    transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PbsItemizations<T>, T> {
    return new GetByKeyRequestBuilder<PbsItemizations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CCTransUniqueID: ccTransUniqueId,
      SubcategoryCode: subcategoryCode,
      TransactionDate: transactionDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PbsItemizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PbsItemizations`.
   */
  update(
    entity: PbsItemizations<T>
  ): UpdateRequestBuilder<PbsItemizations<T>, T> {
    return new UpdateRequestBuilder<PbsItemizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PbsItemizations`.
   * @param dataAreaId Key property. See {@link PbsItemizations.dataAreaId}.
   * @param ccTransUniqueId Key property. See {@link PbsItemizations.ccTransUniqueId}.
   * @param subcategoryCode Key property. See {@link PbsItemizations.subcategoryCode}.
   * @param transactionDate Key property. See {@link PbsItemizations.transactionDate}.
   * @returns A request builder for creating requests that delete an entity of type `PbsItemizations`.
   */
  delete(
    dataAreaId: string,
    ccTransUniqueId: string,
    subcategoryCode: string,
    transactionDate: Moment
  ): DeleteRequestBuilder<PbsItemizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PbsItemizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PbsItemizations` by taking the entity as a parameter.
   */
  delete(
    entity: PbsItemizations<T>
  ): DeleteRequestBuilder<PbsItemizations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ccTransUniqueId?: string,
    subcategoryCode?: string,
    transactionDate?: Moment
  ): DeleteRequestBuilder<PbsItemizations<T>, T> {
    return new DeleteRequestBuilder<PbsItemizations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PbsItemizations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CCTransUniqueID: ccTransUniqueId!,
            SubcategoryCode: subcategoryCode!,
            TransactionDate: transactionDate!
          }
    );
  }
}
