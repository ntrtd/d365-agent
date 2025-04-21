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
import { AbsenceReasons } from './AbsenceReasons';

/**
 * Request builder class for operations supported on the {@link AbsenceReasons} entity.
 */
export class AbsenceReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AbsenceReasons<T>, T> {
  /**
   * Returns a request builder for querying all `AbsenceReasons` entities.
   * @returns A request builder for creating requests to retrieve all `AbsenceReasons` entities.
   */
  getAll(): GetAllRequestBuilder<AbsenceReasons<T>, T> {
    return new GetAllRequestBuilder<AbsenceReasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AbsenceReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AbsenceReasons`.
   */
  create(
    entity: AbsenceReasons<T>
  ): CreateRequestBuilder<AbsenceReasons<T>, T> {
    return new CreateRequestBuilder<AbsenceReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AbsenceReasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link AbsenceReasons.dataAreaId}.
   * @param absenceCode Key property. See {@link AbsenceReasons.absenceCode}.
   * @param reasonCodeId Key property. See {@link AbsenceReasons.reasonCodeId}.
   * @returns A request builder for creating requests to retrieve one `AbsenceReasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    absenceCode: DeserializedType<T, 'Edm.String'>,
    reasonCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AbsenceReasons<T>, T> {
    return new GetByKeyRequestBuilder<AbsenceReasons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AbsenceCode: absenceCode,
      ReasonCodeId: reasonCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AbsenceReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AbsenceReasons`.
   */
  update(
    entity: AbsenceReasons<T>
  ): UpdateRequestBuilder<AbsenceReasons<T>, T> {
    return new UpdateRequestBuilder<AbsenceReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AbsenceReasons`.
   * @param dataAreaId Key property. See {@link AbsenceReasons.dataAreaId}.
   * @param absenceCode Key property. See {@link AbsenceReasons.absenceCode}.
   * @param reasonCodeId Key property. See {@link AbsenceReasons.reasonCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `AbsenceReasons`.
   */
  delete(
    dataAreaId: string,
    absenceCode: string,
    reasonCodeId: string
  ): DeleteRequestBuilder<AbsenceReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AbsenceReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AbsenceReasons` by taking the entity as a parameter.
   */
  delete(entity: AbsenceReasons<T>): DeleteRequestBuilder<AbsenceReasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    absenceCode?: string,
    reasonCodeId?: string
  ): DeleteRequestBuilder<AbsenceReasons<T>, T> {
    return new DeleteRequestBuilder<AbsenceReasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AbsenceReasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AbsenceCode: absenceCode!,
            ReasonCodeId: reasonCodeId!
          }
    );
  }
}
