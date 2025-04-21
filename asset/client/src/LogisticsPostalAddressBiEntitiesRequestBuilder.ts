/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { LogisticsPostalAddressBiEntities } from './LogisticsPostalAddressBiEntities';

/**
 * Request builder class for operations supported on the {@link LogisticsPostalAddressBiEntities} entity.
 */
export class LogisticsPostalAddressBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LogisticsPostalAddressBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LogisticsPostalAddressBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LogisticsPostalAddressBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LogisticsPostalAddressBiEntities<T>, T> {
    return new GetAllRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LogisticsPostalAddressBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LogisticsPostalAddressBiEntities`.
   */
  create(
    entity: LogisticsPostalAddressBiEntities<T>
  ): CreateRequestBuilder<LogisticsPostalAddressBiEntities<T>, T> {
    return new CreateRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LogisticsPostalAddressBiEntities` entity based on its keys.
   * @param location Key property. See {@link LogisticsPostalAddressBiEntities.location}.
   * @param validFrom Key property. See {@link LogisticsPostalAddressBiEntities.validFrom}.
   * @returns A request builder for creating requests to retrieve one `LogisticsPostalAddressBiEntities` entity based on its keys.
   */
  getByKey(
    location: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LogisticsPostalAddressBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>(
      this.entityApi,
      {
        Location: location,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LogisticsPostalAddressBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LogisticsPostalAddressBiEntities`.
   */
  update(
    entity: LogisticsPostalAddressBiEntities<T>
  ): UpdateRequestBuilder<LogisticsPostalAddressBiEntities<T>, T> {
    return new UpdateRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LogisticsPostalAddressBiEntities`.
   * @param location Key property. See {@link LogisticsPostalAddressBiEntities.location}.
   * @param validFrom Key property. See {@link LogisticsPostalAddressBiEntities.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `LogisticsPostalAddressBiEntities`.
   */
  delete(
    location: BigNumber,
    validFrom: Moment
  ): DeleteRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LogisticsPostalAddressBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LogisticsPostalAddressBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LogisticsPostalAddressBiEntities<T>
  ): DeleteRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>;
  delete(
    locationOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<LogisticsPostalAddressBiEntities<T>, T> {
    return new DeleteRequestBuilder<LogisticsPostalAddressBiEntities<T>, T>(
      this.entityApi,
      locationOrEntity instanceof LogisticsPostalAddressBiEntities
        ? locationOrEntity
        : {
            Location: locationOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
