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
import { SubBillAllocMeaTemplates } from './SubBillAllocMeaTemplates';

/**
 * Request builder class for operations supported on the {@link SubBillAllocMeaTemplates} entity.
 */
export class SubBillAllocMeaTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillAllocMeaTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillAllocMeaTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillAllocMeaTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillAllocMeaTemplates<T>, T> {
    return new GetAllRequestBuilder<SubBillAllocMeaTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillAllocMeaTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillAllocMeaTemplates`.
   */
  create(
    entity: SubBillAllocMeaTemplates<T>
  ): CreateRequestBuilder<SubBillAllocMeaTemplates<T>, T> {
    return new CreateRequestBuilder<SubBillAllocMeaTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillAllocMeaTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillAllocMeaTemplates.dataAreaId}.
   * @param meaNumber Key property. See {@link SubBillAllocMeaTemplates.meaNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillAllocMeaTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    meaNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillAllocMeaTemplates<T>, T> {
    return new GetByKeyRequestBuilder<SubBillAllocMeaTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MEANumber: meaNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillAllocMeaTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillAllocMeaTemplates`.
   */
  update(
    entity: SubBillAllocMeaTemplates<T>
  ): UpdateRequestBuilder<SubBillAllocMeaTemplates<T>, T> {
    return new UpdateRequestBuilder<SubBillAllocMeaTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocMeaTemplates`.
   * @param dataAreaId Key property. See {@link SubBillAllocMeaTemplates.dataAreaId}.
   * @param meaNumber Key property. See {@link SubBillAllocMeaTemplates.meaNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocMeaTemplates`.
   */
  delete(
    dataAreaId: string,
    meaNumber: string
  ): DeleteRequestBuilder<SubBillAllocMeaTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocMeaTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocMeaTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillAllocMeaTemplates<T>
  ): DeleteRequestBuilder<SubBillAllocMeaTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    meaNumber?: string
  ): DeleteRequestBuilder<SubBillAllocMeaTemplates<T>, T> {
    return new DeleteRequestBuilder<SubBillAllocMeaTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillAllocMeaTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MEANumber: meaNumber!
          }
    );
  }
}
