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
import { HazardousMaterialDivisionsV2 } from './HazardousMaterialDivisionsV2';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialDivisionsV2} entity.
 */
export class HazardousMaterialDivisionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialDivisionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialDivisionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialDivisionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialDivisionsV2<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialDivisionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialDivisionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialDivisionsV2`.
   */
  create(
    entity: HazardousMaterialDivisionsV2<T>
  ): CreateRequestBuilder<HazardousMaterialDivisionsV2<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialDivisionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialDivisionsV2` entity based on its keys.
   * @param classCode Key property. See {@link HazardousMaterialDivisionsV2.classCode}.
   * @param divisionCode Key property. See {@link HazardousMaterialDivisionsV2.divisionCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialDivisionsV2` entity based on its keys.
   */
  getByKey(
    classCode: DeserializedType<T, 'Edm.String'>,
    divisionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialDivisionsV2<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialDivisionsV2<T>, T>(
      this.entityApi,
      {
        ClassCode: classCode,
        DivisionCode: divisionCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialDivisionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialDivisionsV2`.
   */
  update(
    entity: HazardousMaterialDivisionsV2<T>
  ): UpdateRequestBuilder<HazardousMaterialDivisionsV2<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialDivisionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialDivisionsV2`.
   * @param classCode Key property. See {@link HazardousMaterialDivisionsV2.classCode}.
   * @param divisionCode Key property. See {@link HazardousMaterialDivisionsV2.divisionCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialDivisionsV2`.
   */
  delete(
    classCode: string,
    divisionCode: string
  ): DeleteRequestBuilder<HazardousMaterialDivisionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialDivisionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialDivisionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialDivisionsV2<T>
  ): DeleteRequestBuilder<HazardousMaterialDivisionsV2<T>, T>;
  delete(
    classCodeOrEntity: any,
    divisionCode?: string
  ): DeleteRequestBuilder<HazardousMaterialDivisionsV2<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialDivisionsV2<T>, T>(
      this.entityApi,
      classCodeOrEntity instanceof HazardousMaterialDivisionsV2
        ? classCodeOrEntity
        : {
            ClassCode: classCodeOrEntity!,
            DivisionCode: divisionCode!
          }
    );
  }
}
