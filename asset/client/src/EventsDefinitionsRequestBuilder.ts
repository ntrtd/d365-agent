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
import { EventsDefinitions } from './EventsDefinitions';
import { BusinessEventsDirection } from './BusinessEventsDirection';

/**
 * Request builder class for operations supported on the {@link EventsDefinitions} entity.
 */
export class EventsDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EventsDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `EventsDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `EventsDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<EventsDefinitions<T>, T> {
    return new GetAllRequestBuilder<EventsDefinitions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EventsDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EventsDefinitions`.
   */
  create(
    entity: EventsDefinitions<T>
  ): CreateRequestBuilder<EventsDefinitions<T>, T> {
    return new CreateRequestBuilder<EventsDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EventsDefinitions` entity based on its keys.
   * @param refEntityName Key property. See {@link EventsDefinitions.refEntityName}.
   * @param refTableId Key property. See {@link EventsDefinitions.refTableId}.
   * @param dataSourceName Key property. See {@link EventsDefinitions.dataSourceName}.
   * @param channel Key property. See {@link EventsDefinitions.channel}.
   * @param direction Key property. See {@link EventsDefinitions.direction}.
   * @param legalEntitySpecific Key property. See {@link EventsDefinitions.legalEntitySpecific}.
   * @returns A request builder for creating requests to retrieve one `EventsDefinitions` entity based on its keys.
   */
  getByKey(
    refEntityName: DeserializedType<T, 'Edm.String'>,
    refTableId: DeserializedType<T, 'Edm.Int32'>,
    dataSourceName: DeserializedType<T, 'Edm.String'>,
    channel: DeserializedType<T, 'Edm.String'>,
    direction: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessEventsDirection'
    >,
    legalEntitySpecific: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EventsDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<EventsDefinitions<T>, T>(this.entityApi, {
      RefEntityName: refEntityName,
      RefTableId: refTableId,
      DataSourceName: dataSourceName,
      Channel: channel,
      Direction: direction,
      LegalEntitySpecific: legalEntitySpecific
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EventsDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EventsDefinitions`.
   */
  update(
    entity: EventsDefinitions<T>
  ): UpdateRequestBuilder<EventsDefinitions<T>, T> {
    return new UpdateRequestBuilder<EventsDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EventsDefinitions`.
   * @param refEntityName Key property. See {@link EventsDefinitions.refEntityName}.
   * @param refTableId Key property. See {@link EventsDefinitions.refTableId}.
   * @param dataSourceName Key property. See {@link EventsDefinitions.dataSourceName}.
   * @param channel Key property. See {@link EventsDefinitions.channel}.
   * @param direction Key property. See {@link EventsDefinitions.direction}.
   * @param legalEntitySpecific Key property. See {@link EventsDefinitions.legalEntitySpecific}.
   * @returns A request builder for creating requests that delete an entity of type `EventsDefinitions`.
   */
  delete(
    refEntityName: string,
    refTableId: number,
    dataSourceName: string,
    channel: string,
    direction: BusinessEventsDirection,
    legalEntitySpecific: string
  ): DeleteRequestBuilder<EventsDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EventsDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EventsDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: EventsDefinitions<T>
  ): DeleteRequestBuilder<EventsDefinitions<T>, T>;
  delete(
    refEntityNameOrEntity: any,
    refTableId?: number,
    dataSourceName?: string,
    channel?: string,
    direction?: BusinessEventsDirection,
    legalEntitySpecific?: string
  ): DeleteRequestBuilder<EventsDefinitions<T>, T> {
    return new DeleteRequestBuilder<EventsDefinitions<T>, T>(
      this.entityApi,
      refEntityNameOrEntity instanceof EventsDefinitions
        ? refEntityNameOrEntity
        : {
            RefEntityName: refEntityNameOrEntity!,
            RefTableId: refTableId!,
            DataSourceName: dataSourceName!,
            Channel: channel!,
            Direction: direction!,
            LegalEntitySpecific: legalEntitySpecific!
          }
    );
  }
}
