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
import { CustomOffices } from './CustomOffices';

/**
 * Request builder class for operations supported on the {@link CustomOffices} entity.
 */
export class CustomOfficesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomOffices<T>, T> {
  /**
   * Returns a request builder for querying all `CustomOffices` entities.
   * @returns A request builder for creating requests to retrieve all `CustomOffices` entities.
   */
  getAll(): GetAllRequestBuilder<CustomOffices<T>, T> {
    return new GetAllRequestBuilder<CustomOffices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomOffices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomOffices`.
   */
  create(entity: CustomOffices<T>): CreateRequestBuilder<CustomOffices<T>, T> {
    return new CreateRequestBuilder<CustomOffices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomOffices` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomOffices.dataAreaId}.
   * @param agentAccountNumber Key property. See {@link CustomOffices.agentAccountNumber}.
   * @param officeCode Key property. See {@link CustomOffices.officeCode}.
   * @returns A request builder for creating requests to retrieve one `CustomOffices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agentAccountNumber: DeserializedType<T, 'Edm.String'>,
    officeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomOffices<T>, T> {
    return new GetByKeyRequestBuilder<CustomOffices<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AgentAccountNumber: agentAccountNumber,
      OfficeCode: officeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomOffices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomOffices`.
   */
  update(entity: CustomOffices<T>): UpdateRequestBuilder<CustomOffices<T>, T> {
    return new UpdateRequestBuilder<CustomOffices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomOffices`.
   * @param dataAreaId Key property. See {@link CustomOffices.dataAreaId}.
   * @param agentAccountNumber Key property. See {@link CustomOffices.agentAccountNumber}.
   * @param officeCode Key property. See {@link CustomOffices.officeCode}.
   * @returns A request builder for creating requests that delete an entity of type `CustomOffices`.
   */
  delete(
    dataAreaId: string,
    agentAccountNumber: string,
    officeCode: string
  ): DeleteRequestBuilder<CustomOffices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomOffices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomOffices` by taking the entity as a parameter.
   */
  delete(entity: CustomOffices<T>): DeleteRequestBuilder<CustomOffices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agentAccountNumber?: string,
    officeCode?: string
  ): DeleteRequestBuilder<CustomOffices<T>, T> {
    return new DeleteRequestBuilder<CustomOffices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomOffices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgentAccountNumber: agentAccountNumber!,
            OfficeCode: officeCode!
          }
    );
  }
}
