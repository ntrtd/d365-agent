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
import { MiscellaneousDeliveryTermConnections } from './MiscellaneousDeliveryTermConnections';

/**
 * Request builder class for operations supported on the {@link MiscellaneousDeliveryTermConnections} entity.
 */
export class MiscellaneousDeliveryTermConnectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MiscellaneousDeliveryTermConnections<T>, T> {
  /**
   * Returns a request builder for querying all `MiscellaneousDeliveryTermConnections` entities.
   * @returns A request builder for creating requests to retrieve all `MiscellaneousDeliveryTermConnections` entities.
   */
  getAll(): GetAllRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T> {
    return new GetAllRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MiscellaneousDeliveryTermConnections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MiscellaneousDeliveryTermConnections`.
   */
  create(
    entity: MiscellaneousDeliveryTermConnections<T>
  ): CreateRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T> {
    return new CreateRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MiscellaneousDeliveryTermConnections` entity based on its keys.
   * @param dataAreaId Key property. See {@link MiscellaneousDeliveryTermConnections.dataAreaId}.
   * @param deliveryTermId Key property. See {@link MiscellaneousDeliveryTermConnections.deliveryTermId}.
   * @param chargesCode Key property. See {@link MiscellaneousDeliveryTermConnections.chargesCode}.
   * @returns A request builder for creating requests to retrieve one `MiscellaneousDeliveryTermConnections` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deliveryTermId: DeserializedType<T, 'Edm.String'>,
    chargesCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T> {
    return new GetByKeyRequestBuilder<
      MiscellaneousDeliveryTermConnections<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DeliveryTermId: deliveryTermId,
      ChargesCode: chargesCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MiscellaneousDeliveryTermConnections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MiscellaneousDeliveryTermConnections`.
   */
  update(
    entity: MiscellaneousDeliveryTermConnections<T>
  ): UpdateRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T> {
    return new UpdateRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MiscellaneousDeliveryTermConnections`.
   * @param dataAreaId Key property. See {@link MiscellaneousDeliveryTermConnections.dataAreaId}.
   * @param deliveryTermId Key property. See {@link MiscellaneousDeliveryTermConnections.deliveryTermId}.
   * @param chargesCode Key property. See {@link MiscellaneousDeliveryTermConnections.chargesCode}.
   * @returns A request builder for creating requests that delete an entity of type `MiscellaneousDeliveryTermConnections`.
   */
  delete(
    dataAreaId: string,
    deliveryTermId: string,
    chargesCode: string
  ): DeleteRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MiscellaneousDeliveryTermConnections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MiscellaneousDeliveryTermConnections` by taking the entity as a parameter.
   */
  delete(
    entity: MiscellaneousDeliveryTermConnections<T>
  ): DeleteRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deliveryTermId?: string,
    chargesCode?: string
  ): DeleteRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T> {
    return new DeleteRequestBuilder<MiscellaneousDeliveryTermConnections<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MiscellaneousDeliveryTermConnections
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeliveryTermId: deliveryTermId!,
            ChargesCode: chargesCode!
          }
    );
  }
}
