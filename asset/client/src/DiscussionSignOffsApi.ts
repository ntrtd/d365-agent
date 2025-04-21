/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscussionSignOffs } from './DiscussionSignOffs';
import { DiscussionSignOffsRequestBuilder } from './DiscussionSignOffsRequestBuilder';
import { DiscussionsApi } from './DiscussionsApi';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DiscussionSignOffsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiscussionSignOffs<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): DiscussionSignOffsApi<DeSerializersT> {
    return new DiscussionSignOffsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToOneLink<
      DiscussionSignOffs<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [DiscussionsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      DISCUSSION: new OneToOneLink('Discussion', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DiscussionSignOffs;

  requestBuilder(): DiscussionSignOffsRequestBuilder<DeSerializersT> {
    return new DiscussionSignOffsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscussionSignOffs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DiscussionSignOffs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscussionSignOffs<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DiscussionSignOffs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscussionSignOffs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCUSSION_ID: OrderableEdmTypeField<
      DiscussionSignOffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIGN_OFF_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionSignOffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCUSSION_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      DiscussionSignOffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIGN_OFF_DATE_TIME: OrderableEdmTypeField<
      DiscussionSignOffs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUIRED: EnumField<
      DiscussionSignOffs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link discussion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCUSSION: OneToOneLink<
      DiscussionSignOffs<DeSerializersT>,
      DeSerializersT,
      DiscussionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DiscussionSignOffs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link discussionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_ID: fieldBuilder.buildEdmTypeField(
          'DiscussionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link signOffWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_OFF_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SignOffWorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link discussionWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCUSSION_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DiscussionWorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link signOffDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_OFF_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SignOffDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link required} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED: fieldBuilder.buildEnumField('Required', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscussionSignOffs)
      };
    }

    return this._schema;
  }
}
