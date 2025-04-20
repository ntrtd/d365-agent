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
import { IntrastatPorts } from './IntrastatPorts';

/**
 * Request builder class for operations supported on the {@link IntrastatPorts} entity.
 */
export class IntrastatPortsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatPorts<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatPorts` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatPorts` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatPorts<T>, T> {
    return new GetAllRequestBuilder<IntrastatPorts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntrastatPorts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatPorts`.
   */
  create(
    entity: IntrastatPorts<T>
  ): CreateRequestBuilder<IntrastatPorts<T>, T> {
    return new CreateRequestBuilder<IntrastatPorts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatPorts` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatPorts.dataAreaId}.
   * @param portId Key property. See {@link IntrastatPorts.portId}.
   * @returns A request builder for creating requests to retrieve one `IntrastatPorts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    portId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatPorts<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatPorts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PortId: portId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatPorts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatPorts`.
   */
  update(
    entity: IntrastatPorts<T>
  ): UpdateRequestBuilder<IntrastatPorts<T>, T> {
    return new UpdateRequestBuilder<IntrastatPorts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatPorts`.
   * @param dataAreaId Key property. See {@link IntrastatPorts.dataAreaId}.
   * @param portId Key property. See {@link IntrastatPorts.portId}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatPorts`.
   */
  delete(
    dataAreaId: string,
    portId: string
  ): DeleteRequestBuilder<IntrastatPorts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatPorts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatPorts` by taking the entity as a parameter.
   */
  delete(entity: IntrastatPorts<T>): DeleteRequestBuilder<IntrastatPorts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    portId?: string
  ): DeleteRequestBuilder<IntrastatPorts<T>, T> {
    return new DeleteRequestBuilder<IntrastatPorts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatPorts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PortId: portId!
          }
    );
  }
}
