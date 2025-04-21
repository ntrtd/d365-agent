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
import { Goals } from './Goals';

/**
 * Request builder class for operations supported on the {@link Goals} entity.
 */
export class GoalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Goals<T>, T> {
  /**
   * Returns a request builder for querying all `Goals` entities.
   * @returns A request builder for creating requests to retrieve all `Goals` entities.
   */
  getAll(): GetAllRequestBuilder<Goals<T>, T> {
    return new GetAllRequestBuilder<Goals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Goals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Goals`.
   */
  create(entity: Goals<T>): CreateRequestBuilder<Goals<T>, T> {
    return new CreateRequestBuilder<Goals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Goals` entity based on its keys.
   * @param goal Key property. See {@link Goals.goal}.
   * @param personnelNumber Key property. See {@link Goals.personnelNumber}.
   * @param goalHeadingId Key property. See {@link Goals.goalHeadingId}.
   * @returns A request builder for creating requests to retrieve one `Goals` entity based on its keys.
   */
  getByKey(
    goal: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    goalHeadingId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Goals<T>, T> {
    return new GetByKeyRequestBuilder<Goals<T>, T>(this.entityApi, {
      Goal: goal,
      PersonnelNumber: personnelNumber,
      GoalHeadingId: goalHeadingId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Goals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Goals`.
   */
  update(entity: Goals<T>): UpdateRequestBuilder<Goals<T>, T> {
    return new UpdateRequestBuilder<Goals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Goals`.
   * @param goal Key property. See {@link Goals.goal}.
   * @param personnelNumber Key property. See {@link Goals.personnelNumber}.
   * @param goalHeadingId Key property. See {@link Goals.goalHeadingId}.
   * @returns A request builder for creating requests that delete an entity of type `Goals`.
   */
  delete(
    goal: string,
    personnelNumber: string,
    goalHeadingId: string
  ): DeleteRequestBuilder<Goals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Goals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Goals` by taking the entity as a parameter.
   */
  delete(entity: Goals<T>): DeleteRequestBuilder<Goals<T>, T>;
  delete(
    goalOrEntity: any,
    personnelNumber?: string,
    goalHeadingId?: string
  ): DeleteRequestBuilder<Goals<T>, T> {
    return new DeleteRequestBuilder<Goals<T>, T>(
      this.entityApi,
      goalOrEntity instanceof Goals
        ? goalOrEntity
        : {
            Goal: goalOrEntity!,
            PersonnelNumber: personnelNumber!,
            GoalHeadingId: goalHeadingId!
          }
    );
  }
}
