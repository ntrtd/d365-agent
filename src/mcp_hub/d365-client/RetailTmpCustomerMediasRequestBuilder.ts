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
import { RetailTmpCustomerMedias } from './RetailTmpCustomerMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpCustomerMedias} entity.
 */
export class RetailTmpCustomerMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpCustomerMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpCustomerMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpCustomerMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpCustomerMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpCustomerMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpCustomerMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpCustomerMedias`.
   */
  create(
    entity: RetailTmpCustomerMedias<T>
  ): CreateRequestBuilder<RetailTmpCustomerMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpCustomerMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpCustomerMedias` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTmpCustomerMedias.dataAreaId}.
   * @param customer Key property. See {@link RetailTmpCustomerMedias.customer}.
   * @param fileName Key property. See {@link RetailTmpCustomerMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpCustomerMedias` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customer: DeserializedType<T, 'Edm.String'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpCustomerMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpCustomerMedias<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Customer: customer,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpCustomerMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpCustomerMedias`.
   */
  update(
    entity: RetailTmpCustomerMedias<T>
  ): UpdateRequestBuilder<RetailTmpCustomerMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpCustomerMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCustomerMedias`.
   * @param dataAreaId Key property. See {@link RetailTmpCustomerMedias.dataAreaId}.
   * @param customer Key property. See {@link RetailTmpCustomerMedias.customer}.
   * @param fileName Key property. See {@link RetailTmpCustomerMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCustomerMedias`.
   */
  delete(
    dataAreaId: string,
    customer: string,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpCustomerMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCustomerMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCustomerMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpCustomerMedias<T>
  ): DeleteRequestBuilder<RetailTmpCustomerMedias<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customer?: string,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpCustomerMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpCustomerMedias<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTmpCustomerMedias
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Customer: customer!,
            FileName: fileName!
          }
    );
  }
}
