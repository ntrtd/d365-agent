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
import { CustomerHierarchiesRetailChannels } from './CustomerHierarchiesRetailChannels';

/**
 * Request builder class for operations supported on the {@link CustomerHierarchiesRetailChannels} entity.
 */
export class CustomerHierarchiesRetailChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerHierarchiesRetailChannels<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerHierarchiesRetailChannels` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerHierarchiesRetailChannels` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerHierarchiesRetailChannels<T>, T> {
    return new GetAllRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerHierarchiesRetailChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerHierarchiesRetailChannels`.
   */
  create(
    entity: CustomerHierarchiesRetailChannels<T>
  ): CreateRequestBuilder<CustomerHierarchiesRetailChannels<T>, T> {
    return new CreateRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerHierarchiesRetailChannels` entity based on its keys.
   * @param channel Key property. See {@link CustomerHierarchiesRetailChannels.channel}.
   * @param custHierarchyId Key property. See {@link CustomerHierarchiesRetailChannels.custHierarchyId}.
   * @returns A request builder for creating requests to retrieve one `CustomerHierarchiesRetailChannels` entity based on its keys.
   */
  getByKey(
    channel: DeserializedType<T, 'Edm.String'>,
    custHierarchyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerHierarchiesRetailChannels<T>, T> {
    return new GetByKeyRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>(
      this.entityApi,
      {
        Channel: channel,
        CustHierarchyId: custHierarchyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerHierarchiesRetailChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerHierarchiesRetailChannels`.
   */
  update(
    entity: CustomerHierarchiesRetailChannels<T>
  ): UpdateRequestBuilder<CustomerHierarchiesRetailChannels<T>, T> {
    return new UpdateRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerHierarchiesRetailChannels`.
   * @param channel Key property. See {@link CustomerHierarchiesRetailChannels.channel}.
   * @param custHierarchyId Key property. See {@link CustomerHierarchiesRetailChannels.custHierarchyId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHierarchiesRetailChannels`.
   */
  delete(
    channel: string,
    custHierarchyId: string
  ): DeleteRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerHierarchiesRetailChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHierarchiesRetailChannels` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerHierarchiesRetailChannels<T>
  ): DeleteRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>;
  delete(
    channelOrEntity: any,
    custHierarchyId?: string
  ): DeleteRequestBuilder<CustomerHierarchiesRetailChannels<T>, T> {
    return new DeleteRequestBuilder<CustomerHierarchiesRetailChannels<T>, T>(
      this.entityApi,
      channelOrEntity instanceof CustomerHierarchiesRetailChannels
        ? channelOrEntity
        : {
            Channel: channelOrEntity!,
            CustHierarchyId: custHierarchyId!
          }
    );
  }
}
