/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { SubContractPurchaseOrderHeaders } from './SubContractPurchaseOrderHeaders';

/**
 * Request builder class for operations supported on the {@link SubContractPurchaseOrderHeaders} entity.
 */
export class SubContractPurchaseOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubContractPurchaseOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SubContractPurchaseOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SubContractPurchaseOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SubContractPurchaseOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubContractPurchaseOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubContractPurchaseOrderHeaders`.
   */
  create(
    entity: SubContractPurchaseOrderHeaders<T>
  ): CreateRequestBuilder<SubContractPurchaseOrderHeaders<T>, T> {
    return new CreateRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubContractPurchaseOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubContractPurchaseOrderHeaders.dataAreaId}.
   * @param projSubContractNumber Key property. See {@link SubContractPurchaseOrderHeaders.projSubContractNumber}.
   * @returns A request builder for creating requests to retrieve one `SubContractPurchaseOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projSubContractNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubContractPurchaseOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjSubContractNumber: projSubContractNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubContractPurchaseOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubContractPurchaseOrderHeaders`.
   */
  update(
    entity: SubContractPurchaseOrderHeaders<T>
  ): UpdateRequestBuilder<SubContractPurchaseOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubContractPurchaseOrderHeaders`.
   * @param dataAreaId Key property. See {@link SubContractPurchaseOrderHeaders.dataAreaId}.
   * @param projSubContractNumber Key property. See {@link SubContractPurchaseOrderHeaders.projSubContractNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubContractPurchaseOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    projSubContractNumber: string
  ): DeleteRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubContractPurchaseOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubContractPurchaseOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SubContractPurchaseOrderHeaders<T>
  ): DeleteRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projSubContractNumber?: string
  ): DeleteRequestBuilder<SubContractPurchaseOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<SubContractPurchaseOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubContractPurchaseOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjSubContractNumber: projSubContractNumber!
          }
    );
  }
}
